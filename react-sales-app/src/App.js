import { useState } from "react";
import "./App.scss";
import Nav from "./Nav/Nav.js";
import React from "react";

const App = () => {
  const [isPerformanceActive, setIsPerformanceActive] = useState(false);
  const navClick = (check) => {
    setIsPerformanceActive(check);
    console.log("🚀 ~ file: App.js ~ line 10 ~ navClick ~ isPerformanceActive", isPerformanceActive)
  };



  return (
    <div className="App">
      <Nav
        isPerformanceActive={isPerformanceActive}
        handleNav={navClick}
      />
    </div>
  );
};

export default App;
