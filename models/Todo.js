const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  tasks: [
    {
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      status: {
        type: String,
        required: true,
      },
    },
  ],

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Todo = mongoose.model("Todo", TodoSchema);
