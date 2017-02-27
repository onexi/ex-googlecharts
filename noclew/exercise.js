var exercise = {};
exercise.salaries = [];

var getSalary = function(row) {
    //9: job ,18: salary
    return [row[9], Math.floor(row[18])];
};
var above250k = function(item) {
    return item[1] > 250000; // CORRECT this
};
exercise.getSalaries = function() {
    return exercise.data.data.map( getSalary );
    // CORRECT this to return salaries above 250K
};
var run = function run() {

    exercise.salaries = exercise.getSalaries().filter(above250k);    

    // google requires 1st row to describe the data
    exercise.salaries.unshift(['job', 'salary']);
    // set up type of chart and target of where to draw it

    var target = document.getElementById('chart_div');
    var chart = new google.visualization.PieChart(target);
    //var chart = new google.visualization.PieChart(target);
    drawChart(exercise.salaries, chart);
};