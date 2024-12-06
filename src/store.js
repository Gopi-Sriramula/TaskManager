import { configureStore, createSlice } from "@reduxjs/toolkit";
const reducer1 = createSlice({
  name: "TaskManager",
  initialState: { data: [], selectedData: {}, toggles: [] },
  reducers: {
    addTask: (state, action) => {
      state.data.push(action.payload);
    },
    editTask: (state, action) => {
      state.data = state.data.map((ui) => {
        if (ui.id === action.payload.id) {
          return { ...action.payload.data };
        }
        return ui;
      });
    },
    deleteTask: (state, action) => {
      state.data = state.data.filter((ui) => ui.id !== action.payload);
    },
    checkTask: (state, action) => {
      const target = state.data.find((u) => u.id === action.payload);
      target.status = target.status === "pending" ? "complete" : "pending";
    },
    passData: (state, action) => {
      state.selectedData = state.data.find((ui) => ui.id === action.payload);
    },
  },
});
export const { addTask, checkTask, deleteTask, editTask, passData } =
  reducer1.actions;
const store = configureStore({
  reducer: {
    a: reducer1.reducer,
  },
});
export default store;
