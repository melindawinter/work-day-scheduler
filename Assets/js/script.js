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

  // Create the elements of the scheduler
  //This is the container
  var hoursDiv = $("#hour-div");
  var hourId = 8;
  for (var i = 0; i < hours.length; i++) {
    hourId++;
    var timeDiv = $("<div class='time'>" + hours[i] + "</div>");
    var scheduleDiv = $(
      "<div class='hour row time-block'> <textarea id=" +
        hourId +
        " class='description'></textarea> <button class='saveBtn'>Save</button> </div>"
    );
    hoursDiv.append(timeDiv);
    hoursDiv.append(scheduleDiv);
  }

  //This function marks each event as past, present, or future
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
  //Calling my hour checker function
  hourChecker();

  //Event listener for Save buttons; this puts a newly added event into local storage
  $(".saveBtn").on("click", function () {
    var scheduleText = $(this).siblings(".description").val();
    var scheduleTime = $(this).siblings(".description").attr("id");
    localStorage.setItem(scheduleTime, scheduleText);
    console.log(scheduleText);
  });

  //To retrieve events from local storage
  $("#9").val(localStorage.getItem("9"));
  $("#10").val(localStorage.getItem("10"));
  $("#11").val(localStorage.getItem("11"));
  $("#12").val(localStorage.getItem("12"));
  $("#13").val(localStorage.getItem("13"));
  $("#14").val(localStorage.getItem("14"));
  $("#15").val(localStorage.getItem("15"));
  $("#16").val(localStorage.getItem("16"));
  $("#17").val(localStorage.getItem("17"));
});
