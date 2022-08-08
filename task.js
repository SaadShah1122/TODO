const router = require("express").Router();
const { findById } = require("./task.model");
let task = require("./task.model");

router.route("/").get((req, res) => {
  task
    .find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json("Error:400 " + err));
});
router.route("/addNew").post((req, res) => {
  const todoTask = req.body.todoTask;

  const newTask = new task({ todoTask });

  newTask
    .save()
    .then(() => res.json("added"))
    .catch((err) => res.json(err + "masla hai bht zayada :)"));
});

router.route("/update/:id").put((req, res) => {
  task.findById(req.params.id).then((task) => {
    task.todoTask = req.body.todoTask;

    task
      .save()
      .then(() => res.json("todo task updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});
router.route("/delete/:id").delete((req, res) => {
  task.findById(req.params.id).then((task) => {
    task.todoTask = req.body.todoTask;

    task
      .delete()
      .then(() => res.json("deleted sussfully!"))
      .catch((err) => res.status(400).json("error aa gya" + err));
  });
});

module.exports = router;
