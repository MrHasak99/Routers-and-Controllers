const books = require("../../books");
<<<<<<< HEAD
const Book = require("../../models/Book");
=======
>>>>>>> 3659076c05ec93fae8c93046085720f8151a9aa3

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

<<<<<<< HEAD
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
=======
const createNewBook = (newBookData) => {
  console.log("Creating New Book", newBookData);
  const newId = books.length + 1;
  const newBook = Object.assign({ id: newId }, newBookData);
  console.log("My new book is: ", newBook);
  return newBook;
};

exports.createBook = (req, res) => {
  const newBook = createNewBook(req.body);
  res.status(201).json(newBook);
};

const updateBook = (currentBook, newData) => {
  const myUpdatedBook = Object.assign(currentBook, newData);
  return myUpdatedBook;
};

exports.updateBook = (req, res) => {
  const { bookId } = req.params;
  const book = books.find((book) => book.id === bookId);
  if (book) {
    const updatedBook = updateBook(book, req.body);
    res.status(200).json(updatedBook);
  } else {
    res.status(404).json();
>>>>>>> 3659076c05ec93fae8c93046085720f8151a9aa3
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
