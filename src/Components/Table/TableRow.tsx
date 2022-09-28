import { useDispatch } from "react-redux";
import styles from "./Row.module.css";
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
          <td key={index}>
            <button
              onClick={handleClickEditNote}
              className={styles.edit}
            ></button>
            <button
              onClick={handleClickArchiveNote}
              className={styles.archive}
            ></button>
            <button
              onClick={handleClickDeleteNote}
              className={styles.delete}
            ></button>
          </td>
        ) : value === "archiveSvg" ? (
          <td key={index}>
            <button
              onClick={handleClickUnarchiveNote}
              className={styles.archive}
            ></button>
            <button
              onClick={handleClickDeleteArchiveNote}
              className={styles.delete}
            ></button>
          </td>
        ) : (
          <td key={index}>{value}</td>
        )
      )}
    </tr>
  );
}

export default TableRow;
