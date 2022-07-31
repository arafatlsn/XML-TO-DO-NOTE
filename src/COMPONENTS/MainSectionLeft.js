import React from "react";
import "./MainSectionLeft.css";
import SingleNote from "./SingleNote";

const MainSectionLeft = ({ allNotes, setNote, reFetch, setReFetch }) => {
  return (
    <div className="main-section-left-container">
      <div className="main-section-left-parent">
        <div className="add-new-note-div">
          <button onClick={() => setNote({})}>
            {" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="plus-icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>{" "}
            Add New Note
          </button>
        </div>
        <div>
          {allNotes?.map((note) => (
            <SingleNote
              note={note}
              setNote={setNote}
              reFetch={reFetch}
              setReFetch={setReFetch}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSectionLeft;
