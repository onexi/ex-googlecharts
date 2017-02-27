var exercise = {};
exercise.salaries = [];

var getSalary = function(row) {
    // returning both a job title and a salary
    return [row[9], Math.floor(row[18])];
    // Math.floor rounds it down to an integer
};
var above250k = function(item) {
    // return true (if this statement is true)
    return item[1] > 250000;
};
exercise.getSalaries = function() {
    return exercise.data.data.map(getSalary).filter(above250k);
    //return []; // CORRECT this to return salaries above 250K
    // returning an array of [ ['job title', 23423], ['job title2, 34543]], etc.
    // should be returning the salaries as an integer
    // but now need to insert the metatata - see .unshift()

    // if wanted to sort and filter on job titles, would have to do some wordcounting
};
var run = function run() {

    // first call the getSalaries to return an array, 
    // then return a filtered version of the data set with fewer rows
    exercise.salaries = exercise.getSalaries();

    // google requires 1st row to describe the data
    // appends an array with the meta data
    exercise.salaries.unshift(['job', 'salary']);
    
    // set up type of chart and target of where to draw it
    var target = document.getElementById('chart_div');
    var chart = new google.visualization.BarChart(target);
    
    //var chart = new google.visualization.PieChart(target);
    drawChart(exercise.salaries, chart);
};