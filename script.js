//display current date at top of calendar
var currentTime = moment().format('LLLL');
// document.getElementById("currentDay").innerHTML = currentTime
$("#currentDay").html(currentTime);



//get hours of current time
var currentHour = moment().format('H')
// var timeblockTime = 
//color code each timeblock depending on if it's in the past present or future


// function colorcode() {
// if currentHour = date
// }

// colorcode();
//color code for past = gray
//color code for present = green
//color code for future = blue


//when clicking save button for timeblock, store text in local storage


//when page is refreshed, saved events stay