import { useEffect, useState } from "react";

const Homework = () => {
  const [message, setMessage] = useState("");
  const [tasks, addTasks] = useState([]);
  const [remaining, setRemaining] = useState([]);

  const uid = () => {
    return (
      performance.now().toString(36) + Math.random().toString(36)
    ).replace(/\./g, "");
  };

  const addTaskHandle = (e) => {
    e.preventDefault();
    if (message === "") return;
    const payload = {
      id: uid(),
      name: message,
      done: false,
    };
    addTasks([...tasks, payload]);
    setMessage("");
  };

  const toggleTaskState = (id) => {
    let _task = [...tasks];

    for (let i = 0; i < _task.length; i++) {
      if (_task[i].id === id) {
        _task[i].done = !_task[i].done;
        break;
      }
    }

    addTasks(_task);
  };

  useEffect(() => {
    let count = 0;
    tasks.forEach((task) => {
      if (task.done !== true) {
        count++;
      }
    });
    setRemaining(count);
  }, [tasks]);

  return (
    <div style={{ padding: 20 }}>
      <form onSubmit={addTaskHandle}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <p>
        {remaining} remaining out of {tasks.length} tasks
      </p>
      {tasks.map((task) =>
        task.done !== true ? (
          <li key={task.id} onClick={() => toggleTaskState(task.id)}>
            {task.name}
          </li>
        ) : (
          <li key={task.id} onClick={() => toggleTaskState(task.id)}>
            <del>{task.name}</del>
          </li>
        )
      )}
    </div>
  );
};

export default Homework;
