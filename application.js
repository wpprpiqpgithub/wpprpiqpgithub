
var bth = document.getElementById('button');
var image = document.querySelector(".pictureOne");

var y =0;



    image.onclick = function() {
            y+=40;
            image.style.top = y + "px";
        
        }

    
    bth.onclick = function() {
        y-=40;
        image.style.top = y + "px";
    }

