import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: {},
  currentMonth: new Date(),
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, title, description, type } = action.payload;
      const task = {
        id: new Date().toISOString(),
        title,
        description,
        type,
      };
      if (!state.tasks[date]) {
        state.tasks[date] = [];
      }
      state.tasks[date].push(task);
    },
    deleteTask: (state, action) => {
      const { id, date } = action.payload;
      state.tasks[date] = state.tasks[date].filter((task) => task.id !== id);
    },
    editTask: (state, action) => {
      const { id, date, title, description, type } = action.payload;
      const taskIndex = state.tasks[date].findIndex((task) => task.id === id);
      if (taskIndex > -1) {
        state.tasks[date][taskIndex] = { id, title, description, type };
      }
    },
    deleteAllTasks: (state, action) => {
      const { date } = action.payload;
      state.tasks[date] = [];
    },
    changeMonth: (state, action) => {
      state.currentMonth = action.payload;
    },
  },
});

export const { addTask, deleteTask, editTask, deleteAllTasks, changeMonth } = taskSlice.actions;
export default taskSlice.reducer;
