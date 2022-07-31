import React from "react";
import "./MainSectionRight.css";

const MainSectionRight = ({ submitForm, note }) => {
  return (
    <div className="main-section-right-container">
      <div className="main-section-right-parent">
        <form onSubmit={submitForm}>
          <div className="save-button-div">
            <button className="save-button" type="submit">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  className="save-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3"
                  />
                </svg>
              </span>
              Save
            </button>
          </div>
          <div>
            <label htmlFor="title" className="title-text">
              Title
            </label>{" "}
            <br />
            <input
              type="text"
              name="title"
              className="title-input"
              defaultValue={note?.title}
              required
            />
          </div>
          <div className="note-parent">
            <label htmlFor="note" className="note-text">
              Note
            </label>{" "}
            <br />
            <textarea
              name="note"
              defaultValue={`${note?.note ? note?.note : ""}`}
              className="note-input"
              required
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainSectionRight;
