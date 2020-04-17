const mongoose = require('mongoose');

const Task = mongoose.model('Tasks', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Users',
  },
});

module.exports = Task;
