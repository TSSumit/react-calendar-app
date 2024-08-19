import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, addMonths, subMonths } from 'date-fns';
import Day from './Day';

const Calendar = () => {
  const currentMonth = useSelector((state) => state.tasks.currentMonth);
  const dispatch = useDispatch();

  const daysInMonth = Array.from({ length: 42 }, (_, i) => {
    const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    return new Date(startOfMonth.setDate(i - startOfMonth.getDay() + 1));
  });

  const handlePrevMonth = () => {
    dispatch({ type: 'tasks/changeMonth', payload: subMonths(currentMonth, 1) });
  };

  const handleNextMonth = () => {
    dispatch({ type: 'tasks/changeMonth', payload: addMonths(currentMonth, 1) });
  };

  return (
    <div>
      <div className='w-full flex justify-end'>
        <div className="min-w-40 flex justify-between mb-2 align-baseline">
          <button onClick={handlePrevMonth} className="text-3xl mx-2 -mt-2 pb-1 px-2 rounded-md font-bold hover:bg-gray-200 active:bg-gray-700 active:text-gray-200 transition duration-200">&lt;</button>
          <div className="text-xl rounded-md font-bold hover:bg-gray-200 px-3 py-1">{format(currentMonth, 'MMMM yyyy')}</div>
          <button onClick={handleNextMonth} className="text-3xl mx-2 -mt-2 pb-1 px-2 rounded-md font-bold hover:bg-gray-200 active:bg-gray-700 active:text-gray-200 transition duration-200">&gt;</button>
        </div>
      </div>
      <div className="grid grid-cols-7 bg-white py-2 rounded-t-lg ">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-bold p-1">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {daysInMonth.map((day) => (
          <div key={day} className="border border-gray-400 rounded-xl">
            <Day day={day} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
