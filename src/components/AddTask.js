import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../utils/taskSlice';

const AddTask = ({ date }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskType, setTaskType] = useState('Work');
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(), // Generate a unique ID
      title: taskTitle,
      description: taskDescription,
      type: taskType,
      date,
    };
    dispatch(addTask(newTask));
    setTaskTitle('');
    setTaskDescription('');
    setTaskType('Work');
  };

  return (
    <form onSubmit={handleAddTask} className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Add a new task</h3>
      <div className="mb-2">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="w-full p-2 border rounded-md mb-2"
          placeholder="Task Title"
          required
        />
        <input
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="w-full p-2 border rounded-md mb-2"
          placeholder="Task Description"
          required
        />
        <select
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
          className="w-full p-2 border rounded-md mb-2"
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
      <button
        type="submit"
        className="p-2 w-full bg-green-500 text-white rounded-md hover:bg-green-600 active:bg-green-700 transition duration-300"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
