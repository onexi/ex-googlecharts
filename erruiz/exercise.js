var exercise = {};
exercise.salaries = [];

var getSalary = function(row) {
    return [row[9], Math.floor(row[18])];
};

var above250k = function(item) {
    // returns salaries that are greater than 250k
    return item[1] > 250000;
};

// we could do the filtering directly inside the function getSalaries by placing the function above inside the argument
// this would be what is known as an anonymous function; in practice it is implemented when functions are small
exercise.getSalaries = function() {
    return exercise.data.data.map(getSalary).filter(above250k);
};

var run = function run() {

    // returns a filtered version of the data -- excellent way to do this!
    exercise.salaries = exercise.getSalaries().filter(above250k);
    // google requires 1st row to describe the data
    exercise.salaries.unshift(['job', 'salary']);
    // set up type of chart and target of where to draw it

    var target = document.getElementById('chart_div');
    var chart = new google.visualization.BarChart(target);
    // if we wanted to categorize the salaries: check the job title and visualize with a pie chart
    //var chart = new google.visualization.PieChart(target);
    drawChart(exercise.salaries, chart);
};