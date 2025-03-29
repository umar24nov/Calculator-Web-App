const display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}


function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error 404";
    }
}

// Handle keyboard input
document.addEventListener("keydown", (event) => {
    event.preventDefault();

    if ((event.key >= '0' && event.key <= '9') || event.key === '.' || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter' || event.key === '=') {
        calculate();
    } else if (event.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});


