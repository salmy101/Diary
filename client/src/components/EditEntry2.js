import React, { Fragment, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditEntry2 = () => {
  const [entry, setEntry] = useState({});
  const { id } = useParams();

  const getEntry = async () => {
    try {
      const response = await fetch(`http://localhost:5000/entries/${id}`);
      const jsonData = await response.json(); //parse the json dta you get back
      // console.log("a single entry view", jsonData);
      setEntry(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEntry();
  }, []);

  const navigate = useNavigate();
  const [title, setTitle] = useState(entry.title);
  const [text, setText] = useState(entry.text);

  const updateEntry = async () => {
    try {
      const body = { title, text, id };
      const response = await fetch(
        `http://localhost:5000/entries/${entry.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        navigate('/show');
    } catch (err) {
      console.log(err.message);
    }
  };

  console.log("the entry",entry)

  const reset = () => {
    setTitle(title)
    setText(text)
    navigate("/show")

  }

  return (
    <Fragment>
      <h1>{entry.id}</h1>
      <h1>{entry.title}</h1>
      <h1>{entry.text}</h1>

      <form className="d-flex mt-5">
        <div class="form-group mb-4">
          {/* <div class="form-group mb-4"> */}
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={entry.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* </div> */}

          {/* <div class="form-group mb-4">
    <label for="description">Description</label>
    <textarea id="description"  name="description" class="form-control">
    </textarea>
  </div> */}

          {/* <div class="form-group mb-4"> */}
          <label>Diary Entry</label>
          <textarea
            required
            name="markdown"
            id="markdown"
            className="form-control"
            value={entry.text}
            // onChange={(e) => setText(e.target.value)}
            onChange={(e) => setText({...text, text:e.target.value })}

          ></textarea>
          {/* </div> */}
          {/* 
        <a href="/" class="btn btn-secondary">
          Cancel
        </a> */}
          <button
            type="button"
            class="btn btn-warning"
            onClick={(e) => updateEntry(e)}
          >
            Edit
          </button>

          <button
            type="button"
            class="btn btn-danger"
            onClick={reset}
          >
            Close
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default EditEntry2;
