let display = document.querySelector('input[name=display]');


function handleDisplay(val) {
    display.value += val;
}

function handleClear() {
    display.value = '';
}

function handleEval(val) {
    display.value = eval(val);
}


function handleSquare() {
    display.value *= display.value;
}


function handleErase(val) {
    display.value = val.toString().slice(0, -1)
}

function handleSQRT() {
    display.value = Math.sqrt(display.value)
}
