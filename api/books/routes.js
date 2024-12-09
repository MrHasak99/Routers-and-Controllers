const express = require("express");
const router = express.Router();
<<<<<<< HEAD
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
=======
>>>>>>> 3659076c05ec93fae8c93046085720f8151a9aa3

const {
  listBooks,
  createBook,
  bookDetail,
  updateBook,
  deleteBook,
} = require("./controllers");

router.get("/", listBooks);
router.get("/:bookId", bookDetail);
<<<<<<< HEAD
router.post("/", upload.single("image"), createBook);
=======
router.post("/", createBook);
>>>>>>> 3659076c05ec93fae8c93046085720f8151a9aa3
router.put("/:bookId", updateBook);
router.delete("/:bookId", deleteBook);

module.exports = router;
