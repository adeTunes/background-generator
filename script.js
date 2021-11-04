var color1 = document.querySelector("#inputColor1");
var color2 = document.querySelector("#inputColor2");
var body = document.querySelector("body");
var css = document.querySelector("h3");


function colorFunction(){
    body.style.background= "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background;
}
color1.addEventListener("input", colorFunction);
color2.addEventListener("input", colorFunction);