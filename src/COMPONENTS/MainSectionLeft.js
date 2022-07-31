import React from "react";
import "./MainSectionLeft.css";
import SingleNote from "./SingleNote";

const MainSectionLeft = ({ allNotes, setNote }) => {
  return (
    <div className="main-section-left-container">
      <div className="main-section-left-parent">
        <div className="add-new-note-div">
          <button onClick={() => setNote({})}>Add New Note</button>
        </div>
        <div>
          {allNotes?.map((note) => (
            <SingleNote note={note} setNote={setNote} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSectionLeft;
