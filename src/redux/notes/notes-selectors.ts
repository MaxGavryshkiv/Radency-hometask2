export const getCountOfAllNotes = (state: any) => state.allNotes.notesStats;
export const getNotes = (state: any) => state.allNotes.notes.notes;
export const getArchiveNotes = (state: any) =>
  state.allNotes.notes.archiveNotes;
