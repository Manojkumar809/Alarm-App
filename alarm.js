const time = document.getElementById("time");
const hours = document.getElementById("input-hrs");
const mins = document.getElementById("input-min");
const audio = new Audio("alm.wav");
setInterval(()=>{
    let d = new Date()
    let hour = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    if (hour <= 9){
    time.innerText = `0${hour}:${min}:${sec}`
    }else if(min <= 9){
    time.innerText = `${hour}:0${min}:${sec}`
    }else if(sec <= 9){
    time.innerText = `${hour}:${min}:0${sec}`
    }else if(hour <= 9 && min<=9 && sec<=9){
    time.innerText = `0${hour}:0${min}:0${sec}`
    }else if(min<=9 && sec<=9){
    time.innerText = `${hour}:0${min}:0${sec}`
    }else{
    time.innerText = `${hour}:${min}:${sec}`
    }
},1000)

function setAlarm(){
    setInterval(()=>{
        let d = new Date()
        let cd = new Date()
        cd.setHours(hours.value)
        cd.setMinutes(mins.value)
        if (d.getHours() == cd.getHours() && d.getMinutes() == cd.getMinutes()){
            audio.play();
        } },1000);
    }
    
function stopAlarm(){
    audio.pause()
    location.reload()
}