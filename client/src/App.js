import React, { Fragment } from "react";
import "./App.css";
import Nav from ".//components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./routes/Home";
import Create from "./routes/CreateEntry";
import List from "./routes/ListEntries";
import ShowEntry from "./routes/ShowEntry";
import EditEntry from "./routes/EditEntry";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/show" element={<List />} />
            <Route path="/show/:id" element={<ShowEntry />} />
            <Route path="/edit/:id" element={<EditEntry />} />
          </Routes>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
