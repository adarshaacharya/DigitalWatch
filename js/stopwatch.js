


/*===========================
STOP WATCH SECTION
============================*/

var secs = 0;
var mins = 0;
var hrs = 0;


//var to hold the display values
var displayHrs =0;
var displayMins =0;
var displaySecs =0;


//Define var to hold setInterval() function
var interval = null;

//Define var to hold stopwatch status
var flag ="stopped"; //initially stopped


function stopWatch() {

    secs++; //incrementing time by 1 secs

    if (secs / 60 === 1) {
        secs = 0;
        mins++;
    }


    if (mins / 60 === 1) {
        mins = 0;
        hrs++;
    }


    displayHrs = (hrs<10) ? "0" + hrs : hrs;
    displayMins = (mins<10) ? "0" + mins : mins;
    displaySecs = (secs<10) ? "0" + secs : secs;
   

    //Update time for the user
    var displayTime = displayHrs + " : " + displayMins  + " : " + displaySecs;
    document.getElementById('stop-watch').innerHTML = displayTime;
}



//Working of Start button

var startstop = document.getElementById('startStop');
startstop.addEventListener('click', startStop); //start button ma click vaepachhi

function startStop(){

    if(flag ==="stopped"){ // paila stop watch nachalda

        //start the stop watch now
         
        interval = window.setInterval(stopWatch,1000); 
        document.getElementById('startStop').innerHTML = 'Pause'; //aba start ko thau maa stop vanne button dekhauchha
        flag = "started"; //start vayo vanera sign
   
    }

    else{ //edi start vaisakya chha vane
        window.clearInterval(interval); // tyo run vairaeko stopwatch function lai stop gardine (value clear hudaina)
        document.getElementById('startStop').innerHTML = 'Resume';
        flag ="stopped";
    }


}


// Working of Reset button

var resetbtn = document.getElementById("reset");
resetbtn.addEventListener('click', reset);


function reset(){
    window.clearInterval(interval);
    flag="stopped";
    hrs =0;
    mins =0;
    secs  = 0;
    document.getElementById('stop-watch').innerHTML = "00:00:00";
    document.getElementById('startStop').innerHTML = 'Start';
}



//Working of laps button

var lapbtn = document.getElementById('lapbtn'); 
lapbtn.addEventListener('click', laps);


var LapsContainer = document.querySelector('.laps');

function laps(){
    if(flag == 'started'){
        var li = document.createElement('li');
        
        li.innerHTML =  " <i class='fa fa-bell-o' aria-hidden='true'></i> " + "  " + hrs + " : " + mins +" : " +secs ;
        LapsContainer.appendChild(li);
    }
}



//Workingh of clear all laps 

var clearlap = document.getElementById('clearlapsbtn');
clearlap.addEventListener('click', lapsclear);

function lapsclear(){
    LapsContainer.innerHTML = '';
}


//subtract the time from the last lap

