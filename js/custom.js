


//get the current year for copyright
$('#year').text(new Date().getFullYear());


//getting ht,min,sec

function getTime(element) {

    var date = new Date();
    var hrs = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    var am_pm = "AM";

    //display time in 12 hrs format
    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";

    } else {
        am_pm = "AM";
    }

    if (hrs == 0) {
        hrs = 12;

    }


    //displaying time in two digitis format
    if (hrs < 10) {
        hrs = "0" + hrs;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }

    if (secs < 10) {
        secs = "0" + secs;
    }

    var currentTime = hrs + " : " + mins + " : " + secs + " " + am_pm ;
    
        var timesetter = document.getElementById("display-time");
     //   console.log(timesetter);
        timesetter.innerHTML = currentTime;

}

getTime();
setInterval(getTime, 1000);


function getDate() {
    var today = new Date();

    //Getting day date and month in numeric format
    var day = today.getDay();
    var month = today.getMonth();
    var year = today.getFullYear();


    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var currentDate = dayNames[day] + " - " + monthNames[month] + " - " + year; //fetching name of month and day from arrayNames
    var datesetter = document.getElementById('display-date');
    datesetter.innerHTML = currentDate;
}

getDate();





