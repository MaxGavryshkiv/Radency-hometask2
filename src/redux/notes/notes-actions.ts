import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";
import getDate from "../../utils/dateCreator";
import dateValidation from "../../utils/dateValidation";

const addNote = createAction(
  "notes/add",
  (noteName: string, category: string, content: string) => ({
    payload: {
      id: shortid.generate(),
      noteName,
      created: getDate(),
      category,
      content,
      dates: dateValidation(content),
    },
  })
);

const deleteNote = createAction("notes/delete", (id: string) => ({
  payload: id,
}));

const deleteArchiveNote = createAction("archiveNotes/delete", (id: string) => ({
  payload: id,
}));

const archiveNote = createAction("notes/archive", (id: string) => ({
  payload: id,
}));

const editNote = createAction(
  "notes/edit",
  (
    id: string,
    noteName: string,
    created: string,
    category: string,
    content: string
  ) => ({
    payload: {
      id,
      noteName,
      created,
      category,
      content,
      dates: dateValidation(content),
    },
  })
);

const unarchiveNote = createAction("notes/unarchiveNote", (id: string) => ({
  payload: id,
}));

const notesActions = {
  addNote,
  deleteNote,
  archiveNote,
  editNote,
  unarchiveNote,
  deleteArchiveNote,
};
export default notesActions;
