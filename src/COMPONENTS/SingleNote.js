import React from "react";
import "./SingleNote.css";

const SingleNote = ({ note, setNote }) => {
  return (
    <div onClick={() => setNote(note)} className="note-container-heading">
      <div className="note-parent-heading">
        <h2>{note.title}</h2>
        <h3>{note.note}</h3>
      </div>
    </div>
  );
};

export default SingleNote;
