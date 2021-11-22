// just for testing
console.log("Hello World!");




// Red Error 
document.getElementById("nop").onclick = function(){
    const nop = document.getElementById("nop");
    const red = document.getElementById("redError");
  
    if(nop.value == 0){
        red.style.display = "inline";
        nop.style.border = "2px solid red";
        console.log("Error");
    }else{
        red.style.display = "none";
        nop.style.border = "2px solid hsl(172, 67%, 45%)";
    }
}

document.getElementById("custom").onclick = function(){
    const custom = document.getElementById("custom");
    if(custom.innerText == "Custom"){
        console.log("checking");
        custom.innerText = "HERO";
    } 
}