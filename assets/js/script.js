// Globally declared variables
const now = dayjs().format("dddd MMMM D, YYYY"); // Retrieves current time & applies format
const currentTime = dayjs().hour(); // Retrieves current number of hours

// Display today's day and date in the header of the page
$("#today").html(now);

// Readies the DOM for JavaScript code
$(document).ready(function () {
    
    // Click event for the save button found on each row/hour span
    $(".saveButton").on("click", function () {
        
        // Retrieves the user's text input and the hour span in jQuery
        let input = $(this).siblings(".event").val();
        let span = $(this).parent().attr("id");

        // Saves the user's text input to local storage
        localStorage.setItem(span, input);
    })
    
    // Retrieves time, iterates through hour time spans, & hanges hour span background colors
    function colorChange() {

        // Iterates through each hour time span
        $(".hour-span").each(function () {
            let hourSpan = parseInt($(this).attr("id").split("hour")[1]);

            // Retrieves the current time and adds/removes the applicable classes, changing the background color of each hour time span -- past: gray, present: red, future: green
            if (hourSpan < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (hourSpan === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    // Retrieves user input/work day event that was saved to localStorage and sets that input as the values of the corresponding textarea elements.
    $("#hour8 .event").val(localStorage.getItem("hour8"));
    $("#hour9 .event").val(localStorage.getItem("hour9"));
    $("#hour10 .event").val(localStorage.getItem("hour10"));
    $("#hour11 .event").val(localStorage.getItem("hour11"));
    $("#hour12 .event").val(localStorage.getItem("hour12"));
    $("#hour13 .event").val(localStorage.getItem("hour13"));
    $("#hour14 .event").val(localStorage.getItem("hour14"));
    $("#hour15 .event").val(localStorage.getItem("hour15"));
    $("#hour16 .event").val(localStorage.getItem("hour16"));
    $("#hour17 .event").val(localStorage.getItem("hour17"));

    // Declares & runs the function
    colorChange();
})