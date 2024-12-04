const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://HamadAlKhalaf:dHWVWdSHVZK35IPe@cluster0.cihpm.mongodb.net/BooksDB"
  );
  console.log(`mongo connected: ${conn.connection.host}`);
};

exports.connectDB = connectDB;
