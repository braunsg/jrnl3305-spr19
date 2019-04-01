var width = document.querySelector("#chart2").clientWidth;
var height = 400;
var margin = {top: 25, left: 100, right: 25, bottom: 25};

var svg = d3.select("#chart2")
  .append("svg")
  .attr("width","100%")
  .attr("height", "100%")
  .attr("viewBox","0 0 " + width + " 500")
  .attr("preserveAspectRatio","xMinYMin");

var data = [
  {size: "Studio", rent: 1535},
  {size: "1 Bedroom", rent: 1899},
  {size: "2 Bedroom", rent: 2349},
  {size: "3 Bedroom", rent: 3109},
  {size: "4 Bedroom", rent: 3826},
  {size: "5 Bedroom", rent: 4573}
];

var yScale = d3.scaleBand()
  .domain(["Studio","1 Bedroom","2 Bedroom","3 Bedroom","4 Bedroom","5 Bedroom"])
  .rangeRound([margin.top, height-margin.bottom])
  .padding(0.5);

var xScale = d3.scaleLinear()
  .domain([0,5000])
  .range([margin.left, width-margin.right]);

var xAxis = svg.append("g")
  .attr("class","axis")
  .attr("transform",`translate(0,${height-margin.bottom})`)
  .call(d3.axisBottom().scale(xScale));

var yAxis = svg.append("g")
  .attr("class","axis")
  .attr("transform",`translate(${margin.left},0)`)
  .call(d3.axisLeft().scale(yScale));

var bar = svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
    .attr("class","rentBar")
    .attr("x",margin.left)
    .attr("y", function(d) { return yScale(d.size); })
    .attr("width",function(d) { return xScale(d.rent) - margin.left; })
    .attr("height", yScale.bandwidth())
    .attr("fill","steelblue");
