import axios from "axios";
import notesAction from "./notes-actions";
axios.defaults.baseURL = "https://notesbackend-rho.vercel.app";

const {
  notesStats,
  fetchNote,
  fetchArchiveNote,
  addNote,
  deleteNote,
  archiveNote,
  editNote,
  deleteArchiveNote,
  unarchiveNote,
} = notesAction;

const notesStatsOperation = () => async (dispatch: (arg0: any) => void) => {
  try {
    const { data } = await axios.get("/notes/stats");
    dispatch(notesStats(data.data.summary));
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
};

const fetchNotesOperation = () => async (dispatch: (arg0: any) => void) => {
  try {
    const { data } = await axios.get("/notes");
    dispatch(fetchNote(data.data.notes));
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
};
const fetchArchiveNotesOperation =
  () => async (dispatch: (arg0: any) => void) => {
    try {
      const { data } = await axios.get("/notes/archive");
      dispatch(fetchArchiveNote(data.data.notes));
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

const addNoteOperation =
  (noteName: string, category: string, content: string) =>
  async (dispatch: (arg0: any) => void) => {
    const Note = { noteName, category, content };
    try {
      const { data } = await axios.post("/notes", Note);
      dispatch(addNote(data.data.note));
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

const deleteNoteOperation =
  (notesId: string) => async (dispatch: (arg0: any) => void) => {
    try {
      const { data } = await axios.delete(`/notes/${notesId}`);
      dispatch(deleteNote(notesId));
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };
const archiveNoteOperation =
  (notesId: string) => async (dispatch: (arg0: any) => void) => {
    try {
      await axios.patch(`/notes/archive/${notesId}`);
      dispatch(archiveNote(notesId));
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };
const unarchiveNoteOperation =
  (notesId: string) => async (dispatch: (arg0: any) => void) => {
    try {
      await axios.patch(`/notes/unarchive/${notesId}`);
      dispatch(unarchiveNote(notesId));
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };
const deleteArchiveNoteOperation =
  (noteId: string) => async (dispatch: (arg0: any) => void) => {
    try {
      await axios.delete(`/notes/archive/${noteId}`);
      dispatch(deleteArchiveNote(noteId));
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };
const editNoteOperation =
  (noteId: string, noteName: string, category: string, content: string) =>
  async (dispatch: (arg0: any) => void) => {
    const Note = { noteName, category, content };
    try {
      const { data } = await axios.patch(`/notes/${noteId}`, Note);
      dispatch(editNote(data.data.note));
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

const notesOperation = {
  notesStatsOperation,
  fetchNotesOperation,
  fetchArchiveNotesOperation,
  addNoteOperation,
  deleteNoteOperation,
  archiveNoteOperation,
  deleteArchiveNoteOperation,
  unarchiveNoteOperation,
  editNoteOperation,
};

export default notesOperation;
