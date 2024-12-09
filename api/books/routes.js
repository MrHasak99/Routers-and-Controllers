const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./media",
  filename: (req, file, cb) => {
    cb(null, `${+new Date()}${file.originalname}`);
  },
});

const upload = multer({
  storage,
});

const {
  listBooks,
  createBook,
  bookDetail,
  updateBook,
  deleteBook,
} = require("./controllers");

router.get("/", listBooks);
router.get("/:bookId", bookDetail);
router.post("/", upload.single("image"), createBook);
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

module.exports = router;
