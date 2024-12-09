const express = require("express");
<<<<<<< HEAD
const path = require("path");
=======
>>>>>>> 3659076c05ec93fae8c93046085720f8151a9aa3
const app = express();
const port = "8000";

const books = require("./books");

const booksRouter = require("./api/books/routes");

app.use(express.json());
<<<<<<< HEAD
app.use("/media", express.static(path.join(__dirname, "media")));

=======
>>>>>>> 3659076c05ec93fae8c93046085720f8151a9aa3
app.use("/api/books", booksRouter);

app.listen(port, () => {
  console.log(`Server is now up at ${port}!`);
});

<<<<<<< HEAD
app.get("/books", () => {
  res.json(books);
});

const { connectDB } = require("./database");

connectDB().then();
=======

















app.get("/books", () => {
  res.json(books);
});
>>>>>>> 3659076c05ec93fae8c93046085720f8151a9aa3
