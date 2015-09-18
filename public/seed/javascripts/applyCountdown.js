$(document).ready(function(){
    var target_date = new Date("March 30, 2015").getTime();


    var days, hours, minutes, seconds;


    var countdown = document.getElementById("apply_time");


    setInterval(function () {


        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
     

        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
         
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
         
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
         

        countdown.innerHTML = days + " 天 " + hours + " 時 "
        + minutes + " 分 " + seconds + " 秒";  
     
    }, 1000);
});