import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { format, isSameMonth } from 'date-fns';

const Day = ({ day }) => {
  const currentMonth = useSelector((state) => state.tasks.currentMonth);
  const tasks = useSelector((state) => state.tasks.tasks[format(day, 'yyyy-MM-dd')] || []);
  const isCurrentMonth = isSameMonth(day, currentMonth);

  return (
    <Link to={`/day/${format(day, 'yyyy-MM-dd')}`}>
      <div
        className={`p-2 border h-24 ${
          isCurrentMonth 
            ? (tasks.length > 0 ? 'bg-blue-100' : 'bg-white') 
            : (tasks.length > 0 ? 'bg-blue-100' : 'bg-gray-200')
        }`}
      >
        <div className="flex justify-between items-start pr-2">
          {tasks.length > 0 ? <div className="text-right text-sm">({tasks.length})</div> : <span></span>}
          <div className="text-right font-bold text-lg">{format(day, 'd')}</div>
        </div>
        <ul className="flex flex-col-reverse h-full overflow-hidden  pb-6 list-disc list-inside">
          {tasks.map((task) => (
            <li key={task.id} className="text-xs font-bold text-ellipsis ">
              {task.title}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default Day;
