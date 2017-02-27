var exercise = {};
exercise.salaries = [];

var getSalary = function(row) {
    return [row[9], Math.floor(row[18])];
};
var above250k = function(item) {
    return item[1] > 250000;                                             // If the item[1] is smaller than 250k the func will return false
};
exercise.getSalaries = function() {                                      // CORRECT this to return salaries above 250K
    return exercise.data.data.map(getSalary).filter(above250k);                          //
};
var run = function run() {

    exercise.salaries = exercise.getSalaries();       // google requires 1st row to describe the data + we added the filter part to filter the recieved array to a smaller number
    exercise.salaries.unshift(['job', 'salary']);                       // set up type of chart and target of where to draw it

    var target = document.getElementById('chart_div');
    var chart = new google.visualization.BarChart(target);
    //var chart = new google.visualization.PieChart(target);
    drawChart(exercise.salaries, chart);
};