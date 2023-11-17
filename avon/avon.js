setInterval(function(){
    let b1 = document.getElementById("beam-1")
    let b2 = document.getElementById("beam-2")
    let b3 = document.getElementById("beam-3")
    
    let randomHeight1 = Math.random() * (400 - 180 + 1) + 180;
    let randomHeight2 = Math.random() * (400 - 180 + 1) + 180;
    let randomHeight3 = Math.random() * (400 - 180 + 1) + 180;
    
    let randomRotate1 = Math.random() * (90 +90 + 1) -90;
    let randomRotate2 = Math.random() * (90 +90 + 1) -90;
    let randomRotate3 = Math.random() * (90 +90 + 1) -90;
    
    
    // BEAM 1 STYLING
    b1.style.borderTop = randomHeight1 + "px" + " solid #ffe700";
    b1.style.top = -randomHeight1 + "px";
    b1.style.transform = "rotate(" +  randomRotate1 + "deg)";
    
    // BEAM 2 STYLING
    b2.style.borderTop = randomHeight2 + "px" + " solid #ffe700";
    b2.style.top = -randomHeight2 + "px";
    b2.style.transform = "rotate(" + randomRotate2 + "deg)";
    
    // BEAM 3 STYLING
    b3.style.borderTop = randomHeight3 + "px" + " solid #ffe700";
    b3.style.top = -randomHeight3 + "px";
    b3.style.transform = "rotate(" + randomRotate3 + "deg)";
    }, 1000);