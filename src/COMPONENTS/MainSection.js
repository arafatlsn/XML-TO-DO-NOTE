import React, { useEffect, useState } from "react";
import "./MainSection.css";
import MainSectionLeft from "./MainSectionLeft";
import MainSectionRight from "./MainSectionRight";

const MainSection = () => {
  const [allNotes, setAllNotes] = useState([]);
  const [noteObj, setNote] = useState({});
  const [reFetch, setReFetch] = useState(true);

  useEffect(() => {
    fetch("https://ancient-everglades-82869.herokuapp.com/loadNotes")
      .then((res) => res.json())
      .then((data) => setAllNotes(data));
  }, [reFetch]);

  const submitForm = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const note = e.target.note.value;

    if (!noteObj?._id) {
      fetch("https://ancient-everglades-82869.herokuapp.com/addNote", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, note }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setReFetch(!reFetch);
            e.target.reset();
          }
        });
    } else {
      fetch(
        `https://ancient-everglades-82869.herokuapp.com/updateNote?id=${noteObj?._id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ title, note }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            setReFetch(!reFetch);
            e.target.reset();
          }
        });
    }
  };

  console.log(noteObj);

  return (
    <div className="main-section-container">
      <div className="main-section-parent">
        <MainSectionLeft
          submitForm={submitForm}
          allNotes={allNotes}
          setNote={setNote}
          reFetch={reFetch}
          setReFetch={setReFetch}
        />
        <MainSectionRight submitForm={submitForm} note={noteObj} />
      </div>
    </div>
  );
};

export default MainSection;
