
let imageElem = document.getElementById("replace-image");
    
let images = [
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b1.png', 
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b2.png', 
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b3.png',
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b3.png',
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b4.png', 
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b5.png', 
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b6.png',
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b7.png',
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b8.png', 
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b9.png', 
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b10.png',
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b11.png',
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b13.png', 
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b14.png', 
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b15.png',
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b16.png',
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b17.png', 
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b18.png', 
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b19.png',
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b20.png',
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b21.png', 
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b22.png', 
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b23.png',
    '/Users/hannahfeinstein/Desktop/my-class-site/banana-clock/b24.png',
 ]


function setTime() {
let today = new Date();

let currentHour = today.getHours();

imageElem.src = images[currentHour];

}
setTime()
setInterval(setTime,1000)

  


