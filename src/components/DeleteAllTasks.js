import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAllTasks } from '../utils/taskSlice';

const DeleteAllTasks = ({ date }) => {
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAllTasks({ date }));
  };

  return (
    <button onClick={handleDeleteAll} className="w-full p-2 bg-red-500 text-white rounded-md">
      Delete All Tasks
    </button>
  );
};

export default DeleteAllTasks;
