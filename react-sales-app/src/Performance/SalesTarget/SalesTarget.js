import "./SalesTarget.scss";

import Chart from "react-apexcharts";

const SalesTarget = () => {
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
  let series = [
    80
  ];

  return (
    <div className="target-container">
      <div className="target-title-container">
        <div className="target-title-total">$ 463,942</div>
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
