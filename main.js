let digitalClock = () => {

    let date = new Date();

    let hours = date.getHours();// hours
    let minutes = date.getMinutes();//minutes
    let seconds = date.getSeconds();//seconds

    let amorpm =  'am';

    if (hours == 0){
        hours = 12
    }
    if(hours > 12){
        hours = hours - 12;
        amorpm = "pm"
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;


    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("amorpm").innerHTML = amorpm;

    setTimeout(digitalClock,100);
    
}

digitalClock();