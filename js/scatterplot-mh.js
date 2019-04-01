d3.csv("./data/mh100-data.csv").then(function(data) {

  var width = document.querySelector("#chart1").clientWidth;
  var height = 500;
  var margin = {top: 50, left: 75, right: 50, bottom: 75};

  var svg = d3.select("#chart1")
    .append("svg")
    .attr("width","100%")
    .attr("height", "100%")
    .attr("viewBox","0 0 " + width + " 500")
    .attr("preserveAspectRatio","xMinYMin");

  var xScale = d3.scaleLinear()
    .domain([0,90])
    .range([margin.left, width-margin.right]);

  var yScale = d3.scaleLinear()
    .domain([0,90])
    .range([height-margin.bottom, margin.top]);

  var xAxis = svg.append("g")
    .attr("class","axis")
    .attr("transform",`translate(0,${height-margin.bottom})`)
    .call(d3.axisBottom().scale(xScale));

  var yAxis = svg.append("g")
    .attr("class","axis")
    .attr("transform",`translate(${margin.left},0)`)
    .call(d3.axisLeft().scale(yScale));

  var circle = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
      .attr("class","mhCircle")
      .attr("cx", function(d) { return xScale(d["Age"]); })
      .attr("cy", function(d) { return yScale(d["Years in MH"]); })
      .attr("r",5)
      .attr("fill","none")
      .attr("stroke","steelblue")
      .attr("stroke-width",1);

  var xLabel = svg.append("text")
    .attr("class","axisLabel")
    .attr("x",width/2)
    .attr("y", height - 10)
    .attr("text-anchor","middle")
    .text("Age (years)");

  var yLabel = svg.append("text")
    .attr("class","axisLabel")
    .attr("y",20)
    .attr("x", -height/2)
    .attr("text-anchor","middle")
    .attr("transform","rotate(-90)")
    .text("Years in Mission Hill");

});
