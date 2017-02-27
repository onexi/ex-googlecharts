var exercise = {};
exercise.salaries = [];

var getSalary = function(row) {
    return [row[9], Math.floor(row[18])];
};
var above250k = function(item) {
    return item[1] > 250000;
};
exercise.getSalaries = function() {
    return exercise.data.data.map(getSalary).filter(above250k);
    
};
var run = function run() {

    exercise.salaries = exercise.getSalaries();
    // google requires 1st row to describe the data
    exercise.salaries.unshift(['job', 'salary']);
    // set up type of chart and target of where to draw it

    var target = document.getElementById('chart_div');
    var chart = new google.visualization.BarChart(target);
    //var chart = new google.visualization.PieChart(target);
    drawChart(exercise.salaries, chart);
};