import "./ARPU.scss";
import Chart from "react-apexcharts";

const ARPU = ({ averageWeeklySalesRevenue }) => {
  let options = {
    title: {
      text: "ARPU | LAST 12 MONTHS",
      style: {
        fontSize: "8px",
        color: "#26cff2",
      },
    },
    chart: {
      id: "ARPU",
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      selection: {
        enabled: false,
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
        <h4 className="text-info">AVERAGE REVENUE PER UNIT</h4>
        <h1 className="arpu-title-total">
          <span className="arpu-title-pill badge rounded-pill bg-info">
            ${999}
          </span>
        </h1>
      </div>
      <Chart
        options={options}
        series={series}
        type="area"
        width={800}
        height={107}
      />
    </div>
  );
};

export default ARPU;
