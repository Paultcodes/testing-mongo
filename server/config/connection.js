const mongoose = require('mongoose');

//db

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/programming-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
