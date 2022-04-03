import "./Performance.scss";
import SummaryYTD from "./SummaryYTD/SummaryYTD";


import { useState } from "react";

const Performance = () => {
  return (
    <div className="layout">
      <div className="layout-top">
        <div className="layout-top-left">
            <SummaryYTD />         
          <div>row</div>
          <div>row</div>
        </div>
        <div className="layout-top-middle">col</div>
        <div className="layout-top-right">col</div>
      </div>
      <div className="layout-bottom">
        <div>row</div>
        <div>row</div>
        <div>row</div>
      </div>
    </div>
  );
};

export default Performance;
