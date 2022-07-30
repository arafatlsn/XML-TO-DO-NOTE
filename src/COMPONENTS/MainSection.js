import React from "react";
import "./MainSection.css";
import MainSectionLeft from "./MainSectionLeft";
import MainSectionRight from "./MainSectionRight";

const MainSection = () => {


  const submitForm = e => {
    e.preventDefault();
    const title = e.target.title.value;
    const note = e.target.note.value;
    console.log(title, note)
  }


  return (
    <div className="main-section-container">
      <div className="main-section-parent">
        <MainSectionLeft submitForm={submitForm} />
        <MainSectionRight submitForm={submitForm} />
      </div>
    </div>
  );
};

export default MainSection;
