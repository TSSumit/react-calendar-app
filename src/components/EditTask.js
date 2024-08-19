import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../utils/taskSlice';

const EditTask = ({ task, date }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [type, setType] = useState(task.type);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: task.id, title, description, type, date }));
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border rounded-md"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border rounded-md"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
          <button type="submit" className="p-2 bg-green-500 text-white rounded-md">
            Save
          </button>
        </form>
      ) : (
        <button onClick={() => setIsEditing(true)} className="text-blue-500">Edit</button>
      )}
    </>
  );
};

export default EditTask;
