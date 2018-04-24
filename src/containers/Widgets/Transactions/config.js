const data = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: '',
      backgroundColor: '#F44336',
      borderWidth: 0,
      data: [65, 59, 80, 81, 56, 55, 40, 88, 58, 19, 22, 60, 40, 85, 22, 21],
    },
  ],
};

const data2 = {
  labels: data.labels,
  datasets: [
    {
      ...data.datasets[0],
      backgroundColor: '#42A5F5',
    },
  ],
};

const data3 = {
  labels: data.labels,
  datasets: [
    {
      ...data.datasets[0],
      backgroundColor: '#4CAF50',
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scaleBeginAtZero: true,
  scales: {
    xAxes: [
      {
        categoryPercentage: 0.8,
        barPercentage: 0.8,
        // barThickness: 5,
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          display: false,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
  },
};

const barSettings = {
  // height: 160,
};

export { data, data2, data3, barSettings, options };
