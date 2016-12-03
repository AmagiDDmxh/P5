$(function() {
    var c = document.getElementById("C");
var ctx = c.getContext("2d");
var image = new Image();
image.onload = function() {
        console.log("Loaded image");
        ctx.drawImage(image, 0, 0, c.width, c.height);
    };
image.src = "http://1.bp.blogspot.com/-5bPNsF5plzw/VnJWs-7RbrI/AAAAAAAARmA/DaZmn8YUjAk/s1600-r/logo_research_at_google_color_1x_web_512dp.png"
});