import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getNotes } from "../../redux/notes/notes-selectors";
import notesOperation from "../../redux/notes/notes-operations";
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
    <form className="flex flex-col pl-4 mb-4" onSubmit={handleSubmit}>
      <h2 className="font-bold text-center">Create a note</h2>
      <label htmlFor="noteName" className="flex flex-col items-start">
        <span>Note Name</span>
        <input
          className="w-80 h-10 leading-normal rounded border border-solid border-gray-300 shadow-sm mb-8"
          type="text"
          id="noteName"
          name="noteName"
          placeholder="Name"
          value={noteName}
          required
          onChange={handleChangeName}
        />
      </label>
      <label htmlFor="noteCategory" className="flex flex-col items-start">
        <span>Note Category</span>
        <select
          className="w-52 h-8 leading-normal rounded border border-solid border-gray-300 shadow-sm mb-8"
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

      <label htmlFor="noteContent" className="flex flex-col items-start">
        <span>Note Content</span>
        <textarea
          className="max-w-4xl w-full h-80 resize-none leading-normal rounded border border-solid border-gray-300 shadow-sm mb-4"
          required
          name="noteContent"
          id="noteContent"
          placeholder="write your text"
          value={content}
          onChange={handleChangeContent}
        ></textarea>
      </label>

      <button
        className="w-36 h-12 rounded-3xl border border-solid border-gray-50 shadow-sm bg-white active:bg-gray-100"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

export default Form;
