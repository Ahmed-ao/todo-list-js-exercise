// Arrays to keep track of each task's state

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },

    markCompleted: function () {
      this.complete = true;
    },
  };
  return task;
}
// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  taskComplete.complete = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(task) {
  console.log(
    `${task.title} has${task.complete ? " " : " not "}been completed`
  );
}

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
