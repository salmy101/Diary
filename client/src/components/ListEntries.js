import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditEntry";
import EntryCard from "./EntryCard";

const ListEntries = () => {
  const [entries, setEntries] = useState([]);

  const getEntries = async () => {
    try {
      const response = await fetch("http://localhost:5000/entries");
      const jsonData = await response.json(); //parse the json dta you get back
      console.log(entries)
      setEntries(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEntries();
  }, []);

  //delete function
  const deleteEntry = async (id) => {
    try {
      const deleteEntry = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setEntries(entries.filter((entry) => entry.id !== id));
      console.log("delete todo");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
        <h1 className="text-center mt-5">My Diary</h1>
        <a href="/create" class="card-link">
            create new diary entry
          </a>
        
        {entries.map((entry, index) => {
              return <EntryCard key={index} {...entry} />;
            }).reverse()}
    </div>


    //   <table class="table mt-5 text-center">
    //     <thead>
    //       <tr>
    //         <th>Task</th>
    //         <th>Edit</th>
    //         <th>Delete</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {entries.map((entry) => (
    //         <tr>
    //           <td>{entry.title}</td>
    //           <td>{/* <EditTodo entry={entry} /> */}</td>
    //           <td>
    //             <button
    //               type="button"
    //               class="btn btn-danger"
    //               onClick={() => deleteEntry(entry.id)}
    //             >
    //               Delete
    //             </button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </Fragment>
  );
};

export default ListEntries;
