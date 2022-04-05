import "./Performance.scss";
import SummaryYTD from "./SummaryYTD/SummaryYTD";

import { useState } from "react";
import WeeklySales from "./WeeklySales/WeeklySales";
import SalesTarget from "./SalesTarget/SalesTarget";
import ARPU from "./ARPU/ARPU";

const Performance = () => {
  return (
    <div className="layout">
      <div className="layout-top bg-info text-white">
        <div className="layout-top-left">
          <SummaryYTD
            title={"NEW CUSTOMER | YTD"}
            total={999}
            icon={"userPlus"}
          />
          <SummaryYTD
            title={"SALES REVENUE | YTD"}
            total={"$ " + 999}
            icon={"signal"}
          />
          <SummaryYTD
            title={"PROFIT | YTD"}
            total={"$ " + 999}
            icon={"coins"}
          />
        </div>
        <div className="layout-top-middle border-start border-end">
          <WeeklySales averageWeeklySalesRevenue={9999} />
        </div>
        <div className="layout-top-right">
          <SalesTarget aboveSalesTarget={999999}/>
        </div>
      </div>
      <div className="layout-bottom">
        <div>
          <ARPU  />
        </div>
        <div>row</div>
        <div>row</div>
      </div>
    </div>
  );
};

export default Performance;
