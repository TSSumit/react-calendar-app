import React from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const selectedDate = useSelector(state => state.selectedDate || new Date());
  const formattedDate = selectedDate ? format(new Date(selectedDate), 'dd MMMM yyyy') : '';

  return (
    <div className="flex items-center justify-between p-4 bg-gray-950 text-white">
      <div
        className="text-2xl font-bold cursor-pointer hover:bg-gray-700 active:bg-gray-400 active:text-gray-900 px-2 py-1 rounded-md transition-all duration-200"
        onClick={() => navigate('/')}
      >
        Task Manager
      </div>
      <div className="text-lg font-bold hover:bg-gray-700 active:bg-gray-400 active:text-gray-900 px-2 py-1 rounded-md transition-all duration-200">{formattedDate}</div>
    </div>
  );
};

export default  Navbar;
