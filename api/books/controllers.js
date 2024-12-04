const books = require("../../books");
const Book = require("../../models/Book");

exports.listBooks = (req, res) => {
  const name = req.query.name;
  const author = req.query.author;
  let result = books;
  if (name) {
    result = books.filter((books) => books.name == name);
  }
  if (author) {
    result = result.filter((books) => books.author.includes(author));
  }
  res.json(result);
};

exports.bookDetail = (req, res) => {
  const { bookId } = req.params;
  const book = books.find((book) => book.id === bookId);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json();
  }
};

exports.createBook = async (req, res) => {
  const book = new Book(req.body);
  const newBook = await book.save();
  res.status(201).json(newBook);
};

exports.updateBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const foundBook = await Book.findById(bookId);
    await foundBook.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBook = (bookIdToBeDeleted) => {
  const newBooks = books.filter((book) => book.id != bookIdToBeDeleted);
  console.log("My new books are: ", newBooks);
};

exports.deleteBook = (req, res) => {
  const { bookId } = req.params;
  const book = books.find((book) => book.id === bookId);
  if (book) {
    deleteBook(bookId);
    res.status(204).end();
  } else {
    res.status(404).json();
  }
};
