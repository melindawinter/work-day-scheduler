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

  // var currentHour = moment().format("h");
  var hoursDiv = $("#hour-div");
  var hourId = 8;
  for (var i = 0; i < hours.length; i++) {
    hourId++;
    var timeDiv = $("<div class='time'>" + hours[i] + "</div>");
    var scheduleDiv = $(
      "<div class='hour row time-block'> <textarea id=" +
        hourId +
        " class='description'></textarea> <button class='saveBtn'><i class='fas fa-save'></i></button> </div>"
    );
    hoursDiv.append(timeDiv);
    hoursDiv.append(scheduleDiv);
  }
  $(".saveBtn").on("click", function () {
    var scheduleText = $(this).siblings(".description").val();
    var scheduleTime = $(this).siblings(".description").attr("id");
    localStorage.setItem(scheduleTime, scheduleText);
    console.log(scheduleText);
  });

  function hourChecker() {
    var currentHour = moment().hours();
    $(".description").each(function () {
      var hourEl = parseInt($(this).attr("id"));
      console.log(hourEl);
      if (hourEl < currentHour) {
        $(this).addClass("past");
      } else if (hourEl === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  hourChecker();

  $("#9").val(localStorage.getItem("9"));
  $("#10").val(localStorage.getItem("10"));
  $("#17").val(localStorage.getItem("17"));
  console.log(localStorage.getItem("9"));
});
