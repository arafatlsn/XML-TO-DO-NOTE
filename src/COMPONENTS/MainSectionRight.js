import React from "react";
import "./MainSectionRight.css";

const MainSectionRight = ({ submitForm }) => {
  return (
    <div className="main-section-right-container">
      <div className="main-section-right-parent">
        <form onSubmit={submitForm}>
          <div className="save-button-div">
            <button className="save-button" type="submit">
              Save
            </button>
          </div>
          <div>
            <label htmlFor="title" className="title-text">
              Title
            </label>{" "}
            <br />
            <input type="text" name="title" className="title-input" required />
          </div>
          <div className="note-parent">
            <label htmlFor="note" className="note-text">
              Note
            </label>{" "}
            <br />
            <textarea name="note" className="note-input" required></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainSectionRight;
