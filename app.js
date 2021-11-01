const btn = document.getElementById("btn");
var wrapper = document.querySelector("#devam");

var tl = new TimelineMax({ paused: true });

tl.to("#devam",{ x: 400, y:-250, duration:3, ease:"ease-in-out", fontSize:50, color:"#BF6211" });

btn.onclick = function() {
    btn.style.width="28%"
    wrapper.style.position="absolute"
    btn.style.fontSize="18px"
    tl.play();
}