import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteAllTasks } from '../utils/taskSlice'; // Ensure this action exists
import Task from './Task';
import AddTask from './AddTask';

const DayPage = () => {
  const { date } = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks[date] || []);
  
  const [filter, setFilter] = useState('All');

  const handleDeleteAll = () => {
    dispatch(deleteAllTasks(date)); // Ensure this action is implemented
  };

  const filteredTasks = filter === 'All' ? tasks : tasks.filter((task) => task.type === filter);

  return (
    <div className="p-4 mx-60">
      <h2 className="text-end text-2xl font-bold mb-4">{`Tasks for ${date}`}</h2>
      <AddTask date={date} />
      
      <div className="mb-4">
        <label className="mr-2 text-lg font-semibold">Filter by:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
      
      <div className="p-4 mb-4">
        {filteredTasks.length ? (
          filteredTasks.map((task) => (
            <Task key={task.id} task={task} date={date} />
          ))
        ) : (
          <div className="text-center text-gray-500">No tasks for this category.</div>
        )}
      </div>
      
      <div className="flex justify-between mt-4">
        <button
          onClick={handleDeleteAll}
          className="p-2 w-fit bg-red-500 text-white rounded-md hover:bg-red-600 active:bg-red-700 transition duration-300"
        >
          Delete All
        </button>
        <button
          onClick={() => setFilter('All')}
          className="p-2 w-fit bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-700 transition duration-300"
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default DayPage;
