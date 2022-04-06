import "./SalesTarget.scss";

import Chart from "react-apexcharts";

const SalesTarget = ({aboveSalesTarget, salesTargetMet}) => {
  let options = {
    chart: {
      id: "weeklySales",
      toolbar: {
        show: false,
      },
    },
    labels: ['TARGET MET'],
    tooltip: {
      enabled: false,
    },
 
    
    
  };
  let series = [salesTargetMet];

  return (
    <div className="target-container">
      <div className="target-title-container">
        <div className="target-title-total">{aboveSalesTarget}</div>
        <div>ABOVE SALES TARGET | YTD</div>
      </div>
      <Chart
        options={options}
        series={series}
        type="radialBar"
        height={330}
      />
    </div>
  );
};

export default SalesTarget;
