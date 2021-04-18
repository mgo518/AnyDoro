//Sets background color to given thingy ma bobber
function set_background_color(desired_color){
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = desired_color;
}

function set_background_picture(img_name){
    document.body.style.backgroundColor = "transparent";
    document.body.style.backgroundImage = "url('/images/" + img_name + "')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "100% 100%";
}

function set_custom_background(img_file){
    img_url = URL.createObjectURL(img_file);
    document.body.style.backgroundColor = "transparent";
    document.body.style.backgroundImage = "url('/" + img_url + "')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "100% 100%";
}


let background_1_button = document.getElementById("background-1");
let background_2_button = document.getElementById("background-2");
let background_3_button = document.getElementById("background-3");
let background_4_button = document.getElementById("background-4");
let background_5_button = document.getElementById("background-5");
let background_6_button = document.getElementById("background-6");
let background_7_button = document.getElementById("background-7");
let background_8_button = document.getElementById("background-8");
let background_9_button = document.getElementById("background-9");
let background_10_button = document.getElementById("background-10");
let background_11_button = document.getElementById("background-11");
let background_12_button = document.getElementById("background-12");




background_1_button.addEventListener("click", function() {set_background_color("aquamarine");});
background_2_button.addEventListener("click", function() {set_background_color("cadetblue");});
background_3_button.addEventListener("click", function() {set_background_color("crimson");});
background_4_button.addEventListener("click", function() {set_background_color("darkseagreen");});
background_5_button.addEventListener("click", function() {set_background_color("blanchedalmond");});
background_6_button.addEventListener("click", function() {set_background_color("plum");});

background_7_button.addEventListener("click", function() {set_background_picture("zero_two_4.jpg");});
background_8_button.addEventListener("click", function() {set_background_picture("tanjiro.jpg");});
background_9_button.addEventListener("click", function() {set_background_picture("your_name.jpg");});

background_10_button.addEventListener("click", function() {set_background_picture("nature.jpg");});
background_11_button.addEventListener("click", function() {set_background_picture("modern.webp");});
background_12_button.addEventListener("click", function() {set_background_picture("abstract.jpg");});