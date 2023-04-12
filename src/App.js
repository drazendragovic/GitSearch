import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import "./App.css";

export const GitContext = createContext(null);

function App() {
  const [details, setDetails] = useState({
    userDetails: null,
    userRepos: null
  });

  return (
    <GitContext.Provider value={{details, setDetails}}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </GitContext.Provider>
  );
}

export default App;
