//Make sure the document has loaded
$(document).ready(function () {
  //Create the date text in the jumbotron
  var now = moment().format("dddd, MMMM Do");
  $("#currentDay").text(now);
  //Create the array for the hours in the scheduler
  var hours = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];

  var currentHour = moment().format("h");
  var hoursDiv = $("#hour-div");
  for (var i = 0; i < hours.length; i++) {
    var newHourDiv = $("<div>" + hours[i] + "</div>");
    hoursDiv.append(newHourDiv);
    $(newHourDiv).addClass("hour time-block row");
    //$(newHourDiv).append((<"div" + );
  
});
