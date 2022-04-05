import "./ARPU.scss";
import Chart from "react-apexcharts";

const ARPU = ({ averageWeeklySalesRevenue }) => {
  let options = {
    chart: {
      id: "ARPU",
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    grid: {
      borderColor: "#555",
      clipMarkers: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#000000"],
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
  };
  let series = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 30, 40, 35],
    },
  ];

  return (
    <div className="arpu-container">
      <div className="arpu-title-container">
        <div>AVERAGE WEEKLY SALES REVENUE</div>
        <div className="arpu-title-total">${999}</div>
      </div>
      <Chart
        options={options}
        series={series}
        type="area"
        width={800}
        height={150}
      />
    </div>
  );
};

export default ARPU;
