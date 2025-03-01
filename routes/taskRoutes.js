const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

// Create a task
router.post("/", async (req, res) => {
  try {
    const task = new Task({ name: req.body.name });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

// Get all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Delete a task
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
