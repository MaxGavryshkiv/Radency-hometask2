import notesData from "./defaultNotes";
import { createReducer } from "@reduxjs/toolkit";
import notesActions from "./notes-actions";

interface IAppState {
  notes: {
    id: string;
    noteName: string;
    created: string;
    category: string;
    content: string;
    dates: string;
  }[];
  archiveNotes: {
    id: string;
    noteName: string;
    created: string;
    category: string;
    content: string;
    dates: string;
  }[];
}
const initialState: IAppState = {
  notes: [...notesData],
  archiveNotes: [],
};

const notes = createReducer(initialState, {
  [notesActions.addNote.type]: (
    state,
    {
      payload,
    }: {
      payload: {
        id: string;
        noteName: string;
        created: string;
        category: string;
        content: string;
        dates: string;
      };
    }
  ) => {
    return { ...state, notes: [...state.notes, payload] };
  },
  [notesActions.deleteNote.type]: (state, { payload }) => {
    return {
      ...state,
      notes: state.notes.filter(({ id }) => id !== payload),
    };
  },
  [notesActions.deleteArchiveNote.type]: (state, { payload }) => {
    return {
      ...state,
      archiveNotes: state.archiveNotes.filter(({ id }) => id !== payload),
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
  [notesActions.editNote.type]: (
    state,
    {
      payload,
    }: {
      payload: {
        id: string;
        noteName: string;
        created: string;
        category: string;
        content: string;
        dates: string;
      };
    }
  ) => {
    return {
      ...state,
      notes: [...state.notes.filter((el) => el.id !== payload.id), payload],
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
});

export default notes;
