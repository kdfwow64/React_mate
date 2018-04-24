/* * * * * * * * * * * * * * * * * * * *
              Charts Config
* * * * * * * * * * * * * * * * * * * */

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales",
      type: "line",
      data: [51, 63, 40, 49, 60, 37, 40],
      fill: false,
      borderColor: "#FF6384",
      backgroundColor: "#FF6384",
      pointBorderColor: "#FF6384",
      pointBackgroundColor: "#FF6384",
      pointHoverBackgroundColor: "#FF6384",
      pointHoverBorderColor: "#FF6384",
      yAxisID: "y-axis-2"
    },
    {
      type: "bar",
      label: "Visitor",
      data: [200, 185, 590, 621, 250, 400, 95],
      fill: false,
      backgroundColor: "#48A6F2",
      borderColor: "#48A6F2",
      hoverBackgroundColor: "#48A6F2",
      hoverBorderColor: "#48A6F2",
      yAxisID: "y-axis-1"
    }
  ]
};

const options = {
  responsive: true,
  tooltips: {
    mode: "label"
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-1",
        gridLines: {
          display: false
        }
      },
      {
        type: "linear",
        display: true,
        position: "right",
        id: "y-axis-2",
        gridLines: {
          display: false
        }
      }
    ]
  }
};

const plugins = [
  {
    afterDraw: (chartInstance, easing) => {
      const ctx = chartInstance.chart.ctx;
      ctx.fillText("", 100, 100);
    }
  }
];
export { data, options, plugins };
