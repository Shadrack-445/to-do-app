import { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input !== null) return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id) => {
    const newText = prompt("Edit task:");
    if (newText !== null) {
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      ));
    }
  };

  return (
    <div >
      <h2>Simple To-Do</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{
                textDecoration: task.done ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <button onClick={() => editTask(task.id)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo