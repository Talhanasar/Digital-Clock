let day = document.getElementById("day");
let today = document.getElementById("date")
let box3 =document.getElementById("hours");
let box4 = document.getElementById("minutes");
let box5 = document.getElementById("seconds");
let dot = document.getElementsByClassName("colon");
let change = document.getElementById("time")

let arr = ['Sunday','Monday','Tuesday','Wednesday' , 'Thursday' ,'Friday'];

setInterval(() => {
    let a = new Date();
    let date = a.toUTCString().slice(5,16);
    let week = a.getDay();
    let hr = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    
    dot[0].classList.toggle("extra");
    dot[1].classList.toggle("extra");
    day.innerHTML = arr[week];
    if(hr>12){
        box3.innerHTML = hr-12;
        change.innerHTML = "PM";
    }else{
        box3.innerHTML = hr;
        change.innerHTML = "AM";
    }
    today.innerHTML = date;
    box4.innerHTML = min;
    box5.innerHTML = sec;
}, 1000);
