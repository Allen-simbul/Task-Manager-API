const mongoose = require('mongoose');

// connects express server with mongodb
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
});
