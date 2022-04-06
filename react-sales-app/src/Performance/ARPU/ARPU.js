import "./ARPU.scss";
import Chart from "react-apexcharts";

const ARPU = ({ monthlyARPU }) => {
  
  let options = {
    title: {
      text: "ARPU | LAST 12 MONTHS",
      style: {
        fontSize: "12px",
        fontWeight: "100",
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
      data: monthlyARPU,
    },
  ];

  return (
    <div className="arpu-container border-bottom">
      <div className="arpu-title-container">
        <h4 className="text-info">AVERAGE REVENUE PER UNIT</h4>
        <h1 className="arpu-title-total">
          <span className="arpu-title-pill badge rounded-pill bg-info">
            ${monthlyARPU[0]}
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
