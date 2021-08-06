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
function generateGraph() {
  var labels = [];
  var graphValues = [];
  var n=0;
  for (var i = 0; i < data.length; i++) {
    total = 0;
    for (var key in data[i]) {
      if(key !== "period") {
        total += data[i][key];
      }else{
        labels.push(data[i][key]);
      }
    }
    data[i].total = total / 3;
  }
  for (var keys in data[0]) {
    if(keys !== "period") {
      var temp = {
        label: keys, 
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
      for (var j = 0; j < data.length; j++) {
        temp.data.push(data[j][keys])
      }
      graphValues.push(temp);
    }
  }
  var myChart = new Chart(document.getElementById('myChart').getContext('2d'), {
    type: 'line',
    data: {
      labels: labels,
      datasets: graphValues
    }
  });
}
generateGraph();