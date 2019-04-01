/*

Template for Waypoint trigger:

var WAYPOINT = new Waypoint({
  element: document.querySelector(SELECTION),
  handler: function(direction) {
    if(direction === "down") {

      <-- ACTION GOES HERE FOR DOWNWARD SCROLLING-->

    } else if(direction === "up") {

      <-- ACTION GOES HERE FOR UPWARD SCROLLING -->

    }
  }
});

*/

var waypoint1 = new Waypoint({
  element: document.querySelector("#trigger1"),
  handler: function(direction) {
    if(direction === "down") {

    d3.selectAll(".mhCircle")
      .attr("fill", function(d) {
        if(d["Years in MH"] > 10) {
          return "gold";
        } else {
          return "none";
        }
      });

    } else if(direction === "up") {

      d3.selectAll(".mhCircle")
        .attr("fill", "none");

    }
  }
});

var waypoint2 = new Waypoint({
  element: document.querySelector("#trigger2"),
  handler: function(direction) {
    if(direction === "down") {
      d3.selectAll(".rentBar")
        .attr("fill", function(d) {
          if(d["size"] === "1 Bedroom") {
            return "gold";
          } else {
            return "steelblue";
          }
        });

    } else if(direction === "up") {

      d3.selectAll(".rentBar")
        .attr("fill", "steelblue");

    }
  }
});
