import React, { useEffect, useState } from "react";
import "./MainSection.css";
import MainSectionLeft from "./MainSectionLeft";
import MainSectionRight from "./MainSectionRight";

const MainSection = () => {
  const [allNotes, setAllNotes] = useState([]);
  const [note, setNote] = useState({});
  const [reFetch, setReFetch] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/loadNotes")
      .then((res) => res.json())
      .then((data) => setAllNotes(data));
  }, [reFetch]);

  const submitForm = (e, id) => {
    e.preventDefault();
    const title = e.target.title.value;
    const note = e.target.note.value;

    if (!id) {
      fetch("http://localhost:5000/addNote", {
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
            e.target.reset()
          }
        });
    } else {
      fetch("http://localhost:5000/updateNote", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, note }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            setReFetch(!reFetch);
            e.target.reset()
          }
        });
    }
  };

  console.log(note)

  return (
    <div className="main-section-container">
      <div className="main-section-parent">
        <MainSectionLeft
          submitForm={submitForm}
          allNotes={allNotes}
          setNote={setNote}
        />
        <MainSectionRight submitForm={submitForm} note={note} />
      </div>
    </div>
  );
};

export default MainSection;
