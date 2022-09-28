import { createReducer, combineReducers } from "@reduxjs/toolkit";
import notesActions from "./notes-actions";

interface IAppState {
  notes: {
    id?: string;
    noteName?: string;
    created?: string;
    category?: string;
    content?: string;
    dates?: string;
  }[];
  archiveNotes: {
    id?: string;
    noteName?: string;
    created?: string;
    category?: string;
    content?: string;
    dates?: string;
  }[];
}

const notesStats = createReducer([], {
  [notesActions.notesStats.type]: (state, { payload }) => {
    return payload;
  },
});

const initialState: IAppState = {
  notes: [],
  archiveNotes: [],
};

const notes = createReducer(initialState, {
  [notesActions.fetchNote.type]: (state, { payload }) => {
    return { ...state, notes: payload };
  },
  [notesActions.fetchArchiveNote.type]: (state, { payload }) => {
    return { ...state, archiveNotes: payload };
  },
  [notesActions.addNote.type]: (state, { payload }) => {
    return { ...state, notes: [...state.notes, payload] };
  },
  [notesActions.deleteNote.type]: (state, { payload }) => {
    return {
      ...state,
      notes: state.notes.filter(({ id }) => id !== payload),
    };
  },
  [notesActions.archiveNote.type]: (
    state,
    { payload }: { payload: string }
  ) => {
    return {
      archiveNotes: [
        ...state.archiveNotes,
        ...state.notes.filter(({ id }) => id === payload),
      ],
      notes: state.notes.filter(({ id }) => id !== payload),
    };
  },
  [notesActions.unarchiveNote.type]: (state, { payload }) => {
    return {
      archiveNotes: state.archiveNotes.filter(({ id }) => id !== payload),
      notes: [
        ...state.notes,
        ...state.archiveNotes.filter(({ id }) => id === payload),
      ],
    };
  },
  [notesActions.deleteArchiveNote.type]: (state, { payload }) => {
    return {
      ...state,
      archiveNotes: state.archiveNotes.filter(({ id }) => id !== payload),
    };
  },

  [notesActions.editNote.type]: (state, { payload }) => {
    return {
      ...state,
      notes: [...state.notes.filter(({ id }) => id !== payload.id), payload],
    };
  },
});

export default combineReducers({
  notes,
  notesStats,
});
