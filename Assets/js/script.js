$(document).ready(function () {
  var dateEl = $("#currentDay");
  var now = moment().format("dddd, MMM Do");
  console.log(now);

  $("#currentDay").text(now);
});
