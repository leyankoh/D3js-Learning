import * as d3 from "d3"

// Set up dimensions of the plot. I will take this from the example itself
// Margins is how much space we want the chart to have from its container
var margin = {top: 30, right: 30, bottom: 50, left: 60},
    width = 800 - margin.left - margin.right,
    height= 400 - margin.top - margin.bottom;
// Append svg object
var svg = d3.select("#visHolder")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
// Parse the data
d3.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
    .then(function(data) {
        // year-Month is stored in data.data[i][0]
        // GDP is stored in data.data[i][1]
        var date = [];
        var gdp = [];
        for (var i=0;i<data.data.length;i++){
            date.push(data.data[i][0]);
            gdp.push(data.data[i][1]);
        };
        console.log(date);
    });
