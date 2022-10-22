import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditEntry from "./EditEntry";
import { Link } from "react-router-dom";

const ShowEntry = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState({});

  const getEntry = async () => {
    //get one entry
    try {
      const response = await fetch(`http://localhost:5000/entries/${id}`);
      const jsonData = await response.json(); //parse the json dta you get back
      setEntry(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEntry();
  }, []);






  //delete function
  const deleteEntry = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/entries/${id}`, {
        method: "DELETE",
      });
      // setEntries(entries.filter((entry) => entry.id !== id));
      console.log("delete todo");
    } catch (err) {
      console.error(err);
    }
  };




  return (
    <Fragment>
      <h1>Entry #{entry.id}</h1>

      {/* <div class="card bg-light mb-3">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Light card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div class="card border-secondary mb-3">
  <div class="card-header">Header</div>
  <div class="card-body text-secondary">
    <h5 class="card-title">Secondary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}
      <a href="/show">Back to Diary</a>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{entry.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{entry.created_at}</h6>
          <p class="card-text">{entry.text}</p>

          {/* <Link
            to={{
              pathname: `/edit/${entry.id}`,
              state: {
                entry: entry
              },
            }}
            >
            edit!!
          </Link> */}
           <Link
            to={`/edit/${entry.id}`}
            state={{entry: entry}}
            // key={entry.id}
            >
              {/* <Entry 
              title={entry.title}
              text={entry.text}
              user_id={entry.user_id}
              /> */}
            edit!!
          </Link>

          
          {/* <a href={`/edit/${id}`} class="card-link" props={entry}>
            Edit
          </a>  */}
          {/* <EditEntry entry={entry}/> */}
          <a href="#" class="card-link ml-5" onClick={deleteEntry}>
            Delete
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default ShowEntry;
