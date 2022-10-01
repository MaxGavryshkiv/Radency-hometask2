import { useDispatch } from "react-redux";

import { IRowProps } from "../../interfaces/Table.interface";
import {
  nameValidation,
  contentValidation,
  dateLengthValidation,
} from "../../utils/contentValidation";
import notesOperation from "../../redux/notes/notes-operations";

function TableRow({ rowContent, isIncludeSvg, openEditForm }: IRowProps) {
  const dispatch: (dispatch: any) => Promise<void> = useDispatch();

  if (isIncludeSvg === "notesSvg" || isIncludeSvg === "archiveSvg") {
    rowContent = { ...rowContent, isIncludeSvg };
  }

  if (rowContent.noteName !== undefined) {
    rowContent.noteName = nameValidation(rowContent.noteName);
  }
  if (rowContent.dates !== undefined) {
    rowContent.dates = dateLengthValidation(rowContent.dates);
  }
  if (rowContent.content !== undefined) {
    rowContent.content = contentValidation(rowContent.content);
  }

  const handleClickEditNote = () => {
    if (openEditForm !== undefined && rowContent.id !== undefined) {
      openEditForm(rowContent.id);
    }
  };
  const handleClickArchiveNote = async () => {
    if (rowContent.id !== undefined) {
      await dispatch(notesOperation.archiveNoteOperation(rowContent.id));
      await dispatch(notesOperation.notesStatsOperation());
    }
  };
  const handleClickDeleteNote = async () => {
    if (rowContent.id !== undefined) {
      await dispatch(notesOperation.deleteNoteOperation(rowContent.id));
      await dispatch(notesOperation.notesStatsOperation());
    }
  };
  const handleClickUnarchiveNote = async () => {
    if (rowContent.id !== undefined) {
      await dispatch(notesOperation.unarchiveNoteOperation(rowContent.id));
      await dispatch(notesOperation.notesStatsOperation());
    }
  };
  const handleClickDeleteArchiveNote = async () => {
    if (rowContent.id !== undefined) {
      await dispatch(notesOperation.deleteArchiveNoteOperation(rowContent.id));
      await dispatch(notesOperation.notesStatsOperation());
    }
  };

  return (
    <tr>
      {Object.entries(rowContent).map(([key, value], index) =>
        key === "id" ? null : value === "notesSvg" ? (
          <td
            key={index}
            className="border-solid border-t border-b border-black text-left p-1 h-20 first:border-l first:rounded-l-3xl last:border-r last:rounded-r-3xl"
          >
            <button
              onClick={handleClickEditNote}
              className="h-8 w-8 bg-transparent border-0 rounded-full bg-20 bg-center bg-no-repeat bg-bttn-edit active:bg-active-bttn-edit active:bg-black"
            ></button>
            <button
              onClick={handleClickArchiveNote}
              className="h-8 w-8 bg-transparent border-0 rounded-full bg-20 bg-center bg-no-repeat bg-bttn-archive active:bg-active-bttn-archive active:bg-black"
            ></button>
            <button
              onClick={handleClickDeleteNote}
              className="h-8 w-8 bg-transparent border-0 rounded-full bg-20 bg-center bg-no-repeat bg-bttn-delete active:bg-active-bttn-delete active:bg-black"
            ></button>
          </td>
        ) : value === "archiveSvg" ? (
          <td
            key={index}
            className="border-solid border-t border-b border-black text-left p-1 h-20 first:border-l first:rounded-l-3xl last:border-r last:rounded-r-3xl"
          >
            <button
              onClick={handleClickUnarchiveNote}
              className="h-8 w-8 bg-transparent border-0 rounded-full bg-20 bg-center bg-no-repeat bg-bttn-archive active:bg-active-bttn-archive active:bg-black"
            ></button>
            <button
              onClick={handleClickDeleteArchiveNote}
              className="h-8 w-8 bg-transparent border-0 rounded-full bg-20 bg-center bg-no-repeat bg-bttn-delete active:bg-active-bttn-delete active:bg-black"
            ></button>
          </td>
        ) : (
          <td
            className="border-solid border-t border-b border-black text-left p-1 h-20 first:border-l first:rounded-l-3xl last:border-r last:rounded-r-3xl"
            key={index}
          >
            {value}
          </td>
        )
      )}
    </tr>
  );
}

export default TableRow;
