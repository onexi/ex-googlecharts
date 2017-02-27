var exercise = {};
exercise.salaries = [];

var getSalary = function(row) {
    return [row[9], Math.floor(row[18])];
};
var above250k = function(item) {
    //return false; // CORRECT this
    return item[1] > 250000;
};
exercise.getSalaries = function() {
    return exercise.data.data.map(getSalary); //map is to excute certain function to all of them
    //return []; // CORRECT this to return salaries above 250K
};
var run = function run() {

    exercise.salaries = exercise.getSalaries().filter(above250k);
    //var filtered = exercise.salaries.filter(above250k); //filter in the last class. 
    // google requires 1st row to describe the data
    exercise.salaries.unshift(['job', 'salary']);
    // set up type of chart and target of where to draw it

    var target = document.getElementById('chart_div');
    var chart = new google.visualization.PieChart(target);
    //var chart = new google.visualization.PieChart(target);
    drawChart(exercise.salaries, chart);
};