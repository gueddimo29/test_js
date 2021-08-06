var data = [
  {
    "Cheese": 22.2,
    "CHOCOLATE": 10.3,
    "Impulse": 1.5,
    "period": "2021_26"
  },
  {
    "Cheese": 21.8,
    "CHOCOLATE": 9.8,
    "Impulse": 1.5,
    "period": "2021_27"
  },
  {
    "Cheese": 21.2,
    "CHOCOLATE": 9.7,
    "Impulse": 1.4,
    "period": "2021_28"
  }
];
function addTotal(data){
  let dataWithTotal=[];
  for (let i = 0; i < data.length; i++) {
    let temp = data[i];
    total = 0;
    for (let key in data[i]) {
      if (key !== "period") {
        total += data[i][key];
      }
    }
    temp.total = total / 3;
    dataWithTotal.push(temp);
  }
  return dataWithTotal;
}

function getLabels(dataWithTotal){
  let labels = [];

  for (let i = 0; i < dataWithTotal.length; i++) {
    labels.push(dataWithTotal[i]['period']);
  }
  return labels;
}

function getGraphValues(dataWithTotal){
  let graphValues = [];
  let keys = Object.keys(dataWithTotal[0]);

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] !== "period") {
      let temp = {
        label: keys[i],
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
      };

      for (let n = 0; n < dataWithTotal.length; n++) {
        console.log(dataWithTotal[n][keys[i]]);

        temp.data.push(dataWithTotal[n][keys[i]])
      }

      graphValues.push(temp);
    }
  }
    return graphValues;
}

function generateGraph() {
  let dataWithTotal = addTotal(data);
  let labels = getLabels(dataWithTotal);
  let graphValues = getGraphValues(dataWithTotal);
  graphFunction('myChart',labels,graphValues);

}

function graphFunction(id,graphLabels,graphDatasets){
  let myChart = new Chart(document.getElementById(id).getContext('2d'), {
    type: 'line',
    data: {
      labels: graphLabels,
      datasets: graphDatasets
    }
  });
}

generateGraph();