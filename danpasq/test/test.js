// Testing file for JSON examples
var should = require('chai').should();
var ex = require('./ex.js').load('./exercise.js');
var data = require("./boston.json");

describe('JSON Exercises - number earnings above 250K', function() {
    it('Count of salaries above 250K ', function() {
        ex.data = data;
        var salaries = ex.getSalaries(250000);
        var len = salaries.length;
        len.should.equal(66);
    });
});