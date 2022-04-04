import "./Performance.scss";
import SummaryYTD from "./SummaryYTD/SummaryYTD";



import { useState } from "react";
import WeeklySales from "./WeeklySales/WeeklySales";

const Performance = () => {
  return (
    <div className="layout">
      <div  className="layout-top bg-info text-white">
        <div className="layout-top-left">
            <SummaryYTD title={"NEW CUSTOMER | YTD"} total={133} icon={"userPlus"} />         
            <SummaryYTD title={"NEW CUSTOMER | YTD"} total={133} icon={"signal"} />         
            <SummaryYTD title={"NEW CUSTOMER | YTD"} total={133} icon={"coins"} />         
        </div>
        <div className="layout-top-middle border-start border-end">
          <WeeklySales />
        </div>
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
