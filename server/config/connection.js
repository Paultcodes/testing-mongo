const mongoose = require('mongoose');

//db

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/your-database-name',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
