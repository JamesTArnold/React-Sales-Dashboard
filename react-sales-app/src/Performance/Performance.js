import "./Performance.scss";
import SummaryYTD from "./SummaryYTD/SummaryYTD";

import { useState, useEffect } from "react";
import currencyFormatter from "../UTIL";

import WeeklySales from "./WeeklySales/WeeklySales";
import SalesTarget from "./SalesTarget/SalesTarget";
import ARPU from "./ARPU/ARPU";
import CLV from "./CLV/CLV";
import CAC from "./CAC/CAC";

const Performance = () => {
  const [salesPerformanceData, setSalesPerformanceData] = useState([]);
  const [averageWeeklySalesRevenueWeeks, setAverageWeeklySalesRevenueWeeks] =
    useState([]);
  const [monthlyARPU, setMonthlyARPU] = useState([]);
  const [monthlyCLV, setMonthlyCLV] = useState([]);
  const [monthlyCAC, setMonthlyCAC] = useState([]);

  useEffect(() => {
    const getSalesPerformanceData = async () => {
      const salesPerformanceDataFromServer = await fetchSalesPerformance();
      setSalesPerformanceData(salesPerformanceDataFromServer);
      let weeklySalesREV = [];
      let monthlyARPU = [];
      let monthlyCLV = [];
      let monthlyCAC = [];

      for (const property in salesPerformanceDataFromServer.YTD
        .weeklySalesREV) {
        if (property !== "AVG") {
          weeklySalesREV.push(
            salesPerformanceDataFromServer.YTD.weeklySalesREV[property]
          );
        }
      }

      for (const property in salesPerformanceDataFromServer.YTD
        .weeklySalesREV) {
          monthlyARPU.push(
            salesPerformanceDataFromServer.ARPU[property]
          );
      }

      for (const property in salesPerformanceDataFromServer.CLV) {
          monthlyCLV.push(
            salesPerformanceDataFromServer.CLV[property]
          );
      }

      for (const property in salesPerformanceDataFromServer.CAC) {
          monthlyCAC.push(
            salesPerformanceDataFromServer.CAC[property]
          );
      }

      setAverageWeeklySalesRevenueWeeks(weeklySalesREV);
      setMonthlyARPU(monthlyARPU);
      setMonthlyCLV(monthlyCLV);
      setMonthlyCAC(monthlyCAC);
    };

    getSalesPerformanceData();
  }, []);

  const fetchSalesPerformance = async () => {
    const response = await fetch(
      "https://my.api.mockaroo.com/salesPerformance.json?key=cd7df010"
    );
    const data = await response.json();
    return data;
  };

  return (
    <div className="layout">
      <div className="layout-top bg-info text-white">
        <div className="layout-top-left">
          <SummaryYTD
            title={"NEW CUSTOMER | YTD"}
            total={salesPerformanceData?.YTD?.newCustomer}
            icon={"userPlus"}
          />
          <SummaryYTD
            title={"SALES REVENUE | YTD"}
            total={currencyFormatter.format(
              salesPerformanceData?.YTD?.salesRevenue
            )}
            icon={"signal"}
          />
          <SummaryYTD
            title={"PROFIT | YTD"}
            total={currencyFormatter.format(salesPerformanceData?.YTD?.profit)}
            icon={"coins"}
          />
        </div>
        <div className="layout-top-middle border-start border-end">
          <WeeklySales
            averageWeeklySalesRevenue={currencyFormatter.format(
              salesPerformanceData?.YTD?.weeklySalesREV?.AVG
            )}
            weeklySalesRevenue={averageWeeklySalesRevenueWeeks}
          />
        </div>
        <div className="layout-top-right">
          <SalesTarget
            aboveSalesTarget={currencyFormatter.format(
              salesPerformanceData?.YTD?.aboveSalesTarget
            )}
            salesTargetMet={salesPerformanceData?.YTD?.targetMet}
          />
        </div>
      </div>
      <div className="layout-bottom">
        <div>
          <ARPU />
        </div>
        <div>
          <CLV />
        </div>
        <div>
          <CAC />
        </div>
      </div>
    </div>
  );
};

export default Performance;
