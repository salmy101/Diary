import React, { Fragment, useState } from "react";
import "./App.css";
import Nav from ".//components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./routes/Home";
import Create from "./routes/CreateEntry";
import List from "./routes/ListEntries";
import ShowEntry from "./routes/ShowEntry";
import EditEntry from "./routes/EditEntry";
import Dashboard from './/components/Dashboard';
import Preferences from './/components/Preferences';

import Login from './/components/Login';

function App() {
  const [token, setToken] = useState()

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Fragment>
      <div className="container">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/login" element={<Login />} />


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
