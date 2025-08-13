var card=document.getElementById('card');
var message=document.getElementById('message');
card.addEventListener('mouseover',function(){
card.style.backgroundColor="green";
message.innerHTML="You are IN";
});
card.addEventListener('mouseout',function(){
card.style.backgroundColor="blue";
message.innerHTML="You are OUT";
});
card.addEventListener('click',function(){
card.style.backgroundColor="yellow";
message.innerHTML="You Clicked ";
});   


function updateClock(){
    var date=new Date();
    var hours=date.getHours().toString().padStart(2,'0');
    var mins=date.getMinutes().toString().padStart(2,'0');
    var secs=date.getSeconds().toString().padStart(2,'0');
    document.getElementById('clock').innerHTML=hours+":"+mins+":"+secs;

}

window.setInterval(updateClock,1000);
updateClock();
function playTick() {
    const sound = document.getElementById("tickSound");
    sound.currentTime = 0; // restart sound
    sound.play();
}

function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
    playTick(); // play tick every second
}

setInterval(updateClock, 1000);
updateClock();