import { useDispatch } from "react-redux";
import notesActions from "../../redux/notes/notes-actions";
import styles from "./Row.module.css";
import { IRowProps } from "../../interfaces/Table.interface";
import {
  nameValidation,
  contentValidation,
  dateLengthValidation,
} from "../../utils/contentValidation";

function TableRow({ rowContent, isIncludeSvg, openEditForm }: IRowProps) {
  const dispatch = useDispatch();

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
  const handleClickArchiveNote = () => {
    if (rowContent.id !== undefined) {
      dispatch(notesActions.archiveNote(rowContent.id));
    }
  };
  const handleClickDeleteNote = () => {
    if (rowContent.id !== undefined) {
      dispatch(notesActions.deleteNote(rowContent.id));
    }
  };
  const handleClickUnarchiveNote = () => {
    if (rowContent.id !== undefined) {
      dispatch(notesActions.unarchiveNote(rowContent.id));
    }
  };
  const handleClickDeleteArchiveNote = () => {
    if (rowContent.id !== undefined) {
      dispatch(notesActions.deleteArchiveNote(rowContent.id));
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
