import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import MainContent from "./components/main-content/main-content.tsx";
import Navbar from "./components/navbar/navbar.tsx";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div data-testid="navbar">
          <Navbar />
        </div>
        <MainContent />
      </div>
    </Router>
  );
};

export default App;
