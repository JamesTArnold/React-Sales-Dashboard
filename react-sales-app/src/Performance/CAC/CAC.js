import "./CAC.scss";
import Chart from "react-apexcharts";

const CAC = ({ averageWeeklySalesRevenue }) => {
    let options = {
      title: {
        text: "CAC | LAST 12 MONTHS",
        style: {
          fontSize: "12px",
          fontWeight: "100",
          color: "#26cff2",
        },
      },
      chart: {
        id: "CLV",
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
        selection: {
          enabled: false,
        },
        
        
    },
    stroke: {
        curve: "straight",
    },
      fill: {
        type: "solid",
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
      <div className="arpu-container border-bottom">
        <div className="arpu-title-container">
          <h4 className="text-info">CUSTOMER ACUISITION COST</h4>
          <h1 className="arpu-title-total">
            <span className="arpu-title-pill badge rounded-pill bg-info">
              ${999}
            </span>
          </h1>
        </div>
        <Chart
          options={options}
          series={series}
          type="bar"
          width={800}
          height={107}
        />
      </div>
    );
  };

  export default CAC;