const express = require("express");
const app = express();
const port = "8000";

const books = require("./books");

const booksRouter = require("./api/books/routes");

app.use(express.json());
app.use("/api/books", booksRouter);

app.listen(port, () => {
  console.log(`Server is now up at ${port}!`);
});


















app.get("/books", () => {
  res.json(books);
});
