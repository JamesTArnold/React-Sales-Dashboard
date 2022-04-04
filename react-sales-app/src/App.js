import { useState } from "react";
import "./App.scss";
import React from "react";

import Nav from "./Nav/Nav.js";
import Performance from "./Performance/Performance.js";

const App = () => {
  const [isPerformanceActive, setIsPerformanceActive] = useState(true);
  const navClick = (check) => {
    setIsPerformanceActive(check);
  };
  

  return (
    <div className="App">
      <Nav
        isPerformanceActive={isPerformanceActive}
        handleNav={navClick}
      />
      <Performance />
    </div>
  );
};

export default App;
