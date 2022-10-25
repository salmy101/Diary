import React, { Fragment, useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const EditEntry = (props) => {
  const location = useLocation();
  // const [currentEntry, setCurrentEntry] = useState({})
  // useEffect(() => {
  //   setCurrentEntry(location.state.entry);
  // }, [location])
  const entry = location.state.entry;

  const [title, setTitle] = useState(entry.title);
  const [text, setText] = useState(entry.text);

  const { id } = useParams();
  const navigate = useNavigate();

  const updateEntry = async () => {
    console.log("yooo im heree")
    try {
      const body = { title, text, id };
      const response = await fetch(
        `http://localhost:5000/entries/${entry.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log("useState", entry.title)

      console.log(window.location.pathname); //yields: "/js" (where snippets run)

      // console.log("yooo im heree")

      navigate(`/show/${entry.id}`);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Fragment>
      <h1>Entry #{entry.id}</h1>
      <form className="mt-5" onSubmit={updateEntry}>
        <div class="form-group mb-4">
          {/* <div class="form-group mb-4"> */}
          <label>Title</label>
          <input
            type="text"
            class="form-control"
            placeholder="Entry Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div class="form-group mb-4">
            <label>Full Diary Entry</label>
            <textarea
              required
              class="form-control"
              placeholder="Dear Diary....."
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            onClick={(e) => updateEntry(e)}
          >
            Edit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default EditEntry;
