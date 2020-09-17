let flagLight;
function redOn(){
    flagLight = "r";
    document.getElementById("red").style.opacity = "1";
}
function redOff(){
    document.getElementById("red").style.opacity = "0.2";
}
function yellowOn(){
    flagLight = "y";
    document.getElementById("yellow").style.opacity = "1";
}
function yellowOff(){
    document.getElementById("yellow").style.opacity = "0.2";
}
function greenOn(){
    flagLight = "g";
    document.getElementById("green").style.opacity = "1";
}
function greenOff(){
    document.getElementById("green").style.opacity = "0.2";
}

redOn();
setInterval(() => {
    setTimeout(function(){
        let time = Number(document.getElementById("time").innerText);
        time--;
        if (time == -1){
            if (flagLight == "r"){
                redOff();
                greenOn();
                flagLight = "g";
                time = 10;
            }
            else if (flagLight == "y"){
                yellowOff();
                redOn();
                flagLight = "r";
                time = 10;
            }
            else if (flagLight == "g"){
                greenOff();
                yellowOn();
                flagLight = "y";
                time = 3;
            }
        }
        document.getElementById("time").innerText = time;        
    }, 1000);
    
}, 1000);
