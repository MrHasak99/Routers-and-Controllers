const express = require("express");
const router = express.Router();

const {
  listBooks,
  createBook,
  bookDetail,
  updateBook,
  deleteBook,
} = require("./controllers");

router.get("/", listBooks);
router.get("/:bookId", bookDetail);
router.post("/", createBook);
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

module.exports = router;
