import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notes/notes-reducer.ts";

export const store = configureStore({
  reducer: {
    allNotes: notesReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
