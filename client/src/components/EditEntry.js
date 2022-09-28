import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";


const EditEntry = ({ entry }) => {
  const [title, setTitle] = useState(entry.title);
  const [text, setText] = useState(entry.text);


  const { id } = useParams();
  console.log("id is here?",id)


  const updateEntry = async () => {
    try {
      const body = { title, text, id};
      const response = await fetch(`http://localhost:5000/entries/${entry.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      // window.localStorage = "/";
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Fragment>
      <h1>EDIT ME</h1>
      {/* <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.id}`}
      >
        Edit
      </button>

      <div class="modal" id={`id${todo.id}`} onClick={() => setDescription(todo.description)}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button type="button" class="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div> */}


<form className="d-flex mt-5" onSubmit={updateEntry}
>
  <div class="form-group mb-4">
        {/* <div class="form-group mb-4"> */}
          <label>{entry.title}</label>
          <input
            type="text"
            class="form-control"
            placeholder="Entry Title"
            value={title}
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
            class="form-control"
            placeholder="Dear Diary....."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        {/* </div> */}
{/* 
        <a href="/" class="btn btn-secondary">
          Cancel
        </a> */}

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
      </form>


    </Fragment>
  );
};

export default EditEntry;
