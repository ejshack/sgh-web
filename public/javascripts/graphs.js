var ctx = document.getElementById("myChart").getContext('2d');
var ctx1 = document.getElementById("myChart1").getContext('2d');
var ctx2 = document.getElementById("myChart2").getContext('2d');
var ctx3 = document.getElementById("myChart3").getContext('2d');
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Temp (C)",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        }
    ]
};
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data
    //options: {}
});
var myLineChart = new Chart(ctx1, {
    type: 'line',
    data: data
    //options: {}
});
var myLineChart = new Chart(ctx2, {
    type: 'line',
    data: data
    //options: {}
});
var myLineChart = new Chart(ctx3, {
    type: 'line',
    data: data
    //options: {}
});

var chamberAlert = function(chamberNumber) {
    alert(chamberNumber);
};
