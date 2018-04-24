const data = {
  labels: ["Product X", "Product Y", "Product Z"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#ff6384", "#48A6F2", "#ffbf00"],
      hoverBackgroundColor: ["#FF6384", "#48A6F2", "#ffbf00"]
    }
  ]
};

const settings = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 25,
      fontFamily: "'Roboto', sans-serif",
      fontColor: "#424242",
      fontSize: 13,
      fontStyle: 'bold',
      padding: 20,
    }
  }
};

export { data, settings };
