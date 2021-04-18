//Sets background color to given thingy ma bobber

chrome.storage.local.get('storagecolor', function(data){
    console.log(data.storagecolor);
    document.body.style.backgroundColor = data.storagecolor;
  });
  
  
  chrome.storage.local.get('storagewallpaper', function(data){
    console.log(data.storagewallpaper);
    document.body.style.backgroundImage = data.storagewallpaper;
    if (data.storagewallpaper) {
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "100% 100%";
    }
    });
  

function set_background_color(desired_color){
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = desired_color;
    colorStorage = desired_color;
    wallpaperStorage = 'none';
    chrome.storage.local.set({ 'storagecolor': colorStorage }, function(){});
    chrome.storage.local.set({'storagewallpaper': wallpaperStorage }, function(){});
}

function set_background_picture(img_name){
    document.body.style.backgroundColor = "transparent";
    document.body.style.backgroundImage = "url('/images/" + img_name + "')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "100% 100%";
    colorStorage = "transparent";
    wallpaperStorage = "url('/images/" + img_name + "')";
    chrome.storage.local.set({ 'storagecolor': colorStorage }, function(){});
    chrome.storage.local.set({'storagewallpaper': wallpaperStorage }, function(){});
}

function set_custom_background(img_file){
    img_url = URL.createObjectURL(img_file);
    document.body.style.backgroundColor = "transparent";
    document.body.style.backgroundImage = "url('/" + img_url + "')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "100% 100%";
}


let bg_1_button = document.getElementById("bg-1");
let bg_2_button = document.getElementById("bg-2");
let bg_3_button = document.getElementById("bg-3");
let bg_4_button = document.getElementById("bg-4");
let bg_5_button = document.getElementById("bg-5");
let bg_6_button = document.getElementById("bg-6");
let bg_7_button = document.getElementById("bg-7");
let bg_8_button = document.getElementById("bg-8");
let bg_9_button = document.getElementById("bg-9");
let bg_10_button = document.getElementById("bg-10");
let bg_11_button = document.getElementById("bg-11");
let bg_12_button = document.getElementById("bg-12");


bg_1_button.addEventListener("click", function() {set_background_color("aquamarine");});
bg_2_button.addEventListener("click", function() {set_background_color("cadetblue");});
bg_3_button.addEventListener("click", function() {set_background_color("crimson");});
bg_4_button.addEventListener("click", function() {set_background_color("darkseagreen");});
bg_5_button.addEventListener("click", function() {set_background_color("blanchedalmond");});
bg_6_button.addEventListener("click", function() {set_background_color("plum");});

bg_7_button.addEventListener("click", function() {set_background_picture("zero_two_4.jpg");});
bg_8_button.addEventListener("click", function() {set_background_picture("tanjiro.jpg");});
bg_9_button.addEventListener("click", function() {set_background_picture("your_name.jpg");});

bg_10_button.addEventListener("click", function() {set_background_picture("nature.jpg");});
bg_11_button.addEventListener("click", function() {set_background_picture("modern.webp");});
bg_12_button.addEventListener("click", function() {set_background_picture("abstract.jpg");});