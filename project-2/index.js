//calculator program


let display = document.getElementById("display");
let mode = document.getElementById("mode");
let string = "";
const buttons = document.querySelectorAll("#keys > .operator-btn");

// necessary functions for the calculator

function appendToDisplay(input) {
    display.value += input;
    string +=input;
}

//for changing mode
function changeMode(){
    let mode = document.getElementById("mode");
    if(mode.innerHTML === "L"){
        mode.innerHTML= "D";
        document.querySelector(".container").style.background= "rgba(100, 100, 100, 0.5)";
        document.querySelector(".main-b").style.background='url("p1.jpg") no-repeat';
        document.querySelector(".main-b").style.backgroundSize='cover';
        document.querySelector("#display").style.background="rgba(100, 100, 100, 0.7)";
        //buttons color
        buttons.style.background="linear-gradient(#00c7ff, rgb(0 0 0))";
        buttons.style.color="black";
    }
    else{
        mode.innerHTML="L";
        document.querySelector(".container").style.background="rgba(0, 0, 0 , 0.5)";
        document.querySelector(".main-b").style.background='url("p2.jpg") no-repeat';
        document.querySelector(".main-b").style.backgroundSize='cover';
        document.querySelector("#display").style.background="rgba(0, 0, 0, 0.7)";
        //buttons color
        buttons.style.background="linear-gradient(#447ba1, rgb(189 213 64 / 60%))";
        buttons.style.color = "white";
    }
}



function clearDisplay() {
    display.value ="";
}
function Delete() {
    string=string.substring(0, string.length -1);
    display.value = string;
}
function calculate() {
    try{
    display.value = eval(display.value);
    string = display.value;
    }
    catch(error){
        display.value="Error";
    }
}
