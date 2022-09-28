import { createAction } from "@reduxjs/toolkit";

type NotesArr = {
  id: string;
  noteName: string;
  created: string;
  category: string;
  content: string;
  dates: string;
}[];
type Note = {
  id: string;
  noteName: string;
  created: string;
  category: string;
  content: string;
  dates: string;
};
type Summary = [
  { category: "Idea"; active: number; archive: number },
  { category: "Task"; active: number; archive: number },
  {
    category: "Random Thought";
    active: number;
    archive: number;
  }
];

const notesStats = createAction("notes/notesStats", (data: Summary) => ({
  payload: data,
}));

const fetchNote = createAction("notes/fetchNote", (data: NotesArr) => ({
  payload: data,
}));
const fetchArchiveNote = createAction(
  "notes/fetchArchiveNote",
  (data: NotesArr) => ({
    payload: data,
  })
);

const addNote = createAction("notes/add", (data: Note) => ({
  payload: data,
}));

const deleteNote = createAction("notes/delete", (id: string) => ({
  payload: id,
}));

const archiveNote = createAction("notes/archive", (id: string) => ({
  payload: id,
}));

const deleteArchiveNote = createAction("archiveNotes/delete", (id: string) => ({
  payload: id,
}));

const editNote = createAction("notes/edit", (data: Note) => ({
  payload: data,
}));

const unarchiveNote = createAction("notes/unarchiveNote", (id: string) => ({
  payload: id,
}));

const notesActions = {
  fetchNote,
  fetchArchiveNote,
  addNote,
  deleteNote,
  archiveNote,
  deleteArchiveNote,
  editNote,
  unarchiveNote,
  notesStats,
};
export default notesActions;
