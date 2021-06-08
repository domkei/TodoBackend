var express = require("express");
var router = express.Router();

const Todo = require("../models/Todo");

// get all todos => /todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.json({ message: error });
  }
});

//save todo /todos
router.post("/", async (req, res) => {
  const todo = new Todo(req.body);
  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

//get todo by id
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });
    res.json(todo);
  } catch (error) {
    res.json({ message: error });
  }
});

//update todo by id
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true });
    res.status(200).json(todo);
  } catch (error) {
    res.json({ message: error });
  }
});

//delete todo by id
router.delete("/:id", async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    res.send("deleted!");
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
