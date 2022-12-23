
const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const data = {
  labels: labels,
  datasets: [{
    label: '',
    backgroundColor: 'rgb(0, 176, 69)',
    borderColor: 'rgb(0, 176, 69)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

// pie chart starts here

// Initialize tooltips
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


// show subject chart
function myFunction() {
  var x = document.getElementById('chart-div');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
function myFunction1() {
  var x = document.getElementById('chart-div1');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
function myFunction2() {
  var x = document.getElementById('chart-div2');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
function myFunction3() {
  var x = document.getElementById('chart-div3');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
function myFunction4() {
  var x = document.getElementById('chart-div4');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

function myFunction5() {
  var x = document.getElementById('chart-div5');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
function myFunction6() {
  var x = document.getElementById('chart-div6');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
function myFunction7() {
  var x = document.getElementById('chart-div7');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

///Pie chart for subject difficulty///
const data1 = {

  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(235, 87, 87)',
      'rgb(34, 139, 34)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const config1 = {
  type: 'pie',
  data: data1,

};

const myPieChart = new Chart(
  document.getElementById('myPieChart'),
  config1
);

const myPieChart1 = new Chart(
  document.getElementById('myPieChart1'),
  config1
); const myPieChart2 = new Chart(
  document.getElementById('myPieChart2'),
  config1
); const myPieChart3 = new Chart(
  document.getElementById('myPieChart3'),
  config1
); const myPieChart4 = new Chart(
  document.getElementById('myPieChart4'),
  config1
);
const myPieChart5 = new Chart(
  document.getElementById('myPieChart5'),
  config1
);
const myPieChart6 = new Chart(
  document.getElementById('myPieChart6'),
  config1
);





//initialising a variable name data

var count = 1;
console.log(count)

//printing default value of data that is 0 in h2 tag
document.getElementById("counting").value = count;
console.log(count)


//creation of increment function
function increment() {
  console.log(count)

  count = count + 1;
  document.getElementById("counting").value = count;
  console.log(count)
}
//creation of decrement function
function decrement() {
  count = count - 1;
  document.getElementById("counting").value = count;
  console.log(count)


}