import "./WeeklySales.scss";
import Chart from "react-apexcharts";

const WeeklySales = ({
  averageWeeklySalesRevenue,
  weeklySalesRevenue,
}) => {
  let options = {
    chart: {
      id: "weeklySales",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      show: false,
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    bar: {
      dataLabels: {
        enabled: false,
      },
    },
    xaxis: {
      categories: [
        "w1",
        "w2",
        "w3",
        "w4",
        "w5",
        "w6",
        "w7",
        "w8",
        "w9",
        "w10",
        "w11",
        "w12",
        "w13",
        "w14",
        "w15",
        "w16",
        "w17",
        "w18",
        "w19",
      ],
    },
  };
  let series = [
    {
      name: "series-1",
      data: weeklySalesRevenue,
    },
  ];

  return (
    <div className="weekly-container">
      <div className="weekly-title-container">
        <div className="weekly-title-total">{averageWeeklySalesRevenue}</div>
        <div>AVERAGE WEEKLY SALES REVENUE</div>
      </div>
      <Chart
        options={options}
        series={series}
        type="bar"
        width={600}
        height={220}
      />
    </div>
  );
};

export default WeeklySales;
