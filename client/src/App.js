import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Home from "./components/Home";
import Create from "./components/CreateEntry";
import List from "./components/ListEntries";
import ShowEntry from "./components/ShowEntry"
import EditEntry2 from "./components/EditEntry2";



function App() {
  return (
    <Fragment>
      <div className="container">
        <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/show" element={<List />} />
          <Route path="/show/:id" element={<ShowEntry />} />
          <Route path="/edit/:id" element={<EditEntry2 />} />
          </Routes>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
