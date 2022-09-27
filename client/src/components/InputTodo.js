import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const InputTodo = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const user_id = 1;

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { title, text, user_id };
      const response = await fetch("http://localhost:5000/entries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log("response here", response);
      setTitle("");
      setText("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">create a new entry</h1>
      {/* <form className="d-flex mt-5"  onSubmit={onSubmitForm}>
        <input
          type="text"
          class="form-control"
          placeholder="Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" class="btn btn-info">
          Add
        </button>
      </form> */}
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
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

export default InputTodo;
