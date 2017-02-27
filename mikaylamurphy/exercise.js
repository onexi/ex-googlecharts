var exercise = {};
exercise.salaries = [];

var getSalary = function(row) {
    return [row[9], Math.floor(row[18])];
};
var above250k = function(item) {
    if (item[1] > 250000){
        return true;
    } else {
        return false;
    };
    // CORRECT this
};
exercise.getSalaries = function() {
    var people = exercise.data.data;
    var earnings = people.map(getSalary);
    var earnings = earnings.filter(above250k)
    return earnings; // CORRECT this to return salaries above 250K
};
var run = function run() {

    exercise.salaries = exercise.getSalaries();
    // google requires 1st row to describe the data
    exercise.salaries.unshift(['job', 'salary']);
    // set up type of chart and target of where to draw it

    var target = document.getElementById('chart_div');
    var chart = new google.visualization.PieChart(target);
    //var chart = new google.visualization.PieChart(target);
    drawChart(exercise.salaries, chart);
};