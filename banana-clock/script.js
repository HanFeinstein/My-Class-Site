
let imageElem = document.getElementById("replace-image");
    
let images = [
    'b1.png', 
    'b2.png', 
    'b3.png',
    'b3.png',
    'b4.png', 
    'b5.png', 
    'b6.png',
    'b7.png',
    'b8.png', 
    'b9.png', 
    'b10.png',
    'b11.png',
    'b13.png', 
    'b14.png', 
    'b15.png',
    'b16.png',
    'b17.png', 
    'b18.png', 
    'b19.png',
    'b20.png',
    'b21.png', 
    'b22.png', 
    'b23.png',
    'b24.png',
 ]


function setTime() {
let today = new Date();

let currentHour = today.getHours();

imageElem.src = images[currentHour];

}
setTime()
setInterval(setTime,1000)

  


