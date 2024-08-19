import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = ({ date }) => {
  const tasks = useSelector((state) => state.tasks.tasks[date] || []);

  return (
    <div className="p-4">
      {tasks.length ? (
        tasks.map((task) => (
          <Task key={task.id} task={task} date={date} />
        ))
      ) : (
        <div className="text-center text-gray-500">No tasks for this day.</div>
      )}
    </div>
  );
};

export default TaskList;
