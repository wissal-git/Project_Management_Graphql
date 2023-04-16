const mongoose = require('mongoose');
const connectDB = async () => {
       var conn = await mongoose.connect(process.env.MONGO_URI);
       console.log (`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};
module.exports =connectDB;

/*const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;*/