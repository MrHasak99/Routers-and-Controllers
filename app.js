const express = require("express");
const path = require("path");
const app = express();
const port = "8000";

const books = require("./books");

const booksRouter = require("./api/books/routes");

app.use(express.json());
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/api/books", booksRouter);

app.listen(port, () => {
  console.log(`Server is now up at ${port}!`);
});


app.get("/books", () => {
  res.json(books);
});

const { connectDB } = require("./database");

connectDB().then();