import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getNotes } from "../../redux/notes/notes-selectors";
import notesOperation from "../../redux/notes/notes-operations";
import styles from "./Form.module.css";
import { IFormProps } from "../../interfaces/Form.interface";

function Form({ closeModal, idOfNotes = undefined }: IFormProps) {
  const notes = useSelector(getNotes);
  const dispatch: (dispatch: any) => Promise<void> = useDispatch();

  const [noteName, setNoteName] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNoteName(event.target.value);

  const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setCategory(event.target.value);

  const handleChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(event.target.value);

  const getById = (id: string) => {
    return notes.filter((el: any) => el.id === id);
  };

  if (idOfNotes && noteName === "") {
    let getNote = getById(idOfNotes);
    setNoteName(getNote[0].noteName);
    setCategory(getNote[0].category);
    setContent(getNote[0].content);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (idOfNotes) {
      await dispatch(
        notesOperation.editNoteOperation(idOfNotes, noteName, category, content)
      );
      closeModal();
    } else {
      await dispatch(
        notesOperation.addNoteOperation(noteName, category, content)
      );
      await dispatch(notesOperation.notesStatsOperation());
      closeModal();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Create a note</h2>
      <label htmlFor="noteName" className={styles.formLabel}>
        <span>Note Name</span>
        <input
          className={styles.noteName}
          type="text"
          id="noteName"
          name="noteName"
          placeholder="Name"
          value={noteName}
          required
          onChange={handleChangeName}
        />
      </label>
      <label htmlFor="noteCategory" className={styles.formLabel}>
        <span>Note Category</span>
        <select
          className={styles.noteCategory}
          name="noteCategory"
          id="noteCategory"
          required
          value={category}
          onChange={handleChangeCategory}
        >
          <option value="">Choose Category</option>
          <option value="Task">Task</option>
          <option value="Random Thought">Random Thought</option>
          <option value="Idea">Idea</option>
        </select>
      </label>

      <label htmlFor="noteContent" className={styles.formLabel}>
        <span>Note Content</span>
        <textarea
          className={styles.noteContent}
          required
          name="noteContent"
          id="noteContent"
          placeholder="write your text"
          value={content}
          onChange={handleChangeContent}
        ></textarea>
      </label>

      <button className={styles.button} type="submit">
        Send
      </button>
    </form>
  );
}

export default Form;
