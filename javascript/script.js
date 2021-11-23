const b = document.getElementById("bill");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const cust = document.getElementById("custom");
const nop = document.getElementById("nop");
const red = document.getElementById("redError");
const rst = document.getElementById("reset");
let tip = document.getElementById("t1");
let total = document.getElementById("t2");

// Tip calculator calculation
let x;
btn1.onclick = function(){
    x = 5;
    btn1.style.backgroundColor = "hsl(172, 67%, 45%)";
    btn1.style.color = "hsl(183, 100%, 15%)";
    btn2.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn2.style.color = "white";
    btn3.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn3.style.color = "white";
    btn4.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn4.style.color = "white";
    btn5.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn5.style.color = "white";
    cust.value = "0";
    // cust.ariaPlaceholder = "0";
    cust.placeholder = "0";
    console.log(x);
}
btn2.onclick = function(){
    x = 10;
    btn1.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn1.style.color = "white";
    btn2.style.backgroundColor = "hsl(172, 67%, 45%)";
    btn2.style.color = "hsl(183, 100%, 15%)";
    btn3.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn3.style.color = "white";
    btn4.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn4.style.color = "white";
    btn5.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn5.style.color = "white";
    custom.value = 0;
    console.log(x);
}
btn3.onclick = function(){
    x = 15;
    btn1.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn1.style.color = "white";
    btn2.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn2.style.color = "white";
    btn3.style.backgroundColor = "hsl(172, 67%, 45%)";
    btn3.style.color = "hsl(183, 100%, 15%)";
    btn4.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn4.style.color = "white";
    btn5.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn5.style.color = "white";
    custom.value = 0;
    console.log(x);
}
btn4.onclick = function(){
    x = 25;
    btn1.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn1.style.color = "white";
    btn2.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn2.style.color = "white";
    btn3.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn3.style.color = "white";
    btn4.style.backgroundColor = "hsl(172, 67%, 45%)";
    btn4.style.color = "hsl(183, 100%, 15%)";
    btn5.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn5.style.color = "white";
    custom.value = 0;
    console.log(x);
}
btn5.onclick = function(){
    x = 50;
    btn1.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn1.style.color = "white";
    btn2.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn2.style.color = "white";
    btn3.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn3.style.color = "white";
    btn4.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn4.style.color = "white";
    btn5.style.backgroundColor = "hsl(172, 67%, 45%)";
    btn5.style.color = "hsl(183, 100%, 15%)";
    custom.value = 0;
    // custom.placeholer = "custom";
    console.log(x);
}
custom.onclick = function(){
    x = custom.value;
    btn1.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn1.style.color = "white";
    btn2.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn2.style.color = "white";
    btn3.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn3.style.color = "white";
    btn4.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn4.style.color = "white";
    btn5.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn5.style.color = "white";
    console.log(x);
}



// Red Error 
document.getElementById("nop").onclick = function(){  
    if(nop.value == 0){
        red.style.display = "inline";
        nop.style.border = "2px solid red";
        // console.log("Error");
    }else{
        red.style.display = "none";
        nop.style.border = "2px solid hsl(172, 67%, 45%)";
        tip = (b.value/nop.value) * (x/100);
        total = tip + (b.value/nop.value);
        console.log(tip);
        t1.innerHTML = "$" + tip.toFixed(2);
        t2.innerHTML = "$" + total.toFixed(2);
    }
}
rst.onclick = function(){
    t1.innerHTML = "$0.00";
    t2.innerHTML = "$0.00";
}