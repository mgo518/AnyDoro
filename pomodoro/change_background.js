//Sets background color to given thingy ma bobber
function set_background_color(desired_color){
    document.body.style.backgroundColor = desired_color;
}

let background_1 = document.getElementById("background-1");
let background_2 = document.getElementById("background-2");
let background_3 = document.getElementById("background-3");
let background_4 = document.getElementById("background-4");
let background_5 = document.getElementById("background-5");
let background_6 = document.getElementById("background-6");

background_1.addEventListener("click", function() {set_background_color("aquamarine");})
background_2.addEventListener("click", function() {set_background_color("cadetblue");})
background_3.addEventListener("click", function() {set_background_color("crimson");})
background_4.addEventListener("click", function() {set_background_color("aquamarine");})
background_5.addEventListener("click", function() {set_background_color("cadetblue");})
background_6.addEventListener("click", function() {set_background_color("crimson");})