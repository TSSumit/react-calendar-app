import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../utils/taskSlice';

const Task = ({ task, date }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [taskDescription, setTaskDescription] = useState(task.description);
  const [taskType, setTaskType] = useState(task.type);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: task.id, title: taskTitle, description: taskDescription, type: taskType, date }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteTask({ id: task.id, date }));
  };

  return (
    <div className="p-4 mb-4 border rounded-md bg-white transition duration-300">
      <div className="flex flex-col">
        {isEditing ? (
          <form onSubmit={handleEdit} className="w-full">
            <div className="mb-2">
              <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="w-full p-2 border rounded-md mb-2"
                required
              />
              <input
                type="text"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="w-full p-2 border rounded-md mb-2"
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
              <button
                type="submit"
                className="p-2 w-full bg-green-500 text-white rounded-md hover:bg-green-600 active:bg-green-700 transition duration-300"
              >
                Save
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="font-bold mb-1">{taskTitle}</div>
            <div className="mb-1">{taskDescription}</div>
            <div className="text-sm text-gray-500 mb-2">{taskType}</div>
            <div className="flex justify-between mt-2">
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-1 text-blue-500 bg-gray-200 rounded-lg hover:text-blue-700 hover:bg-gray-300 active:bg-gray-400 active:text-blue-200 transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-1 text-red-500 bg-gray-200 rounded-lg hover:text-red-700 hover:bg-gray-300 active:bg-gray-400 active:text-red-200 transition duration-300"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
