import React, { useState } from "react";
import Table from "./Components/Table/Table";
import Modal from "./layout/Modal/Modal";
import Form from "./Components/Form/Form";
import Button from "./Components/Button/Button";
import { useSelector } from "react-redux";
import {
  getNotes,
  getArchiveNotes,
  getCountOfAllNotes,
} from "./redux/notes/notes-selectors";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [idOfNote, setIdOfNote] = useState("");

  const notes = useSelector(getNotes);
  const archiveNotes = useSelector(getArchiveNotes);
  const countOfAllNotes = useSelector(getCountOfAllNotes);

  const openForm = () => {
    setModalContent("form");
    toggleModal();
  };
  const openEditForm = (id: string) => {
    setModalContent("editForm");
    setIdOfNote(id);
    toggleModal();
  };
  const openArchive = () => {
    setModalContent("archive");
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <Table
          arrOfHeaderName={[
            "Name",
            "Created",
            "Category",
            "Content",
            "Dates",
            "svg",
          ]}
          arrOfObj={notes}
          isIncludeSvg={"notesSvg"}
          openEditForm={openEditForm}
        />
        <Button handleClick={openForm} text={"Add Note"} />

        <Table
          arrOfHeaderName={["Category Name", "Active", "Archive"]}
          arrOfObj={countOfAllNotes}
          isIncludeSvg={undefined}
        />
        <Button handleClick={openArchive} text={"Open Archive"} />
      </div>

      {showModal && (
        <Modal onClose={toggleModal}>
          {modalContent === "form" ? (
            <Form closeModal={toggleModal} idOfNotes={undefined} />
          ) : modalContent === "editForm" ? (
            <Form closeModal={toggleModal} idOfNotes={idOfNote} />
          ) : modalContent === "archive" ? (
            <Table
              arrOfHeaderName={[
                "Name",
                "Created",
                "Category",
                "Content",
                "Dates",
                "svg",
              ]}
              arrOfObj={archiveNotes}
              isIncludeSvg={"archiveSvg"}
            />
          ) : null}
        </Modal>
      )}
    </>
  );
};

export default App;
