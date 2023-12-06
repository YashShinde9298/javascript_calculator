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


const handleKeys = (event) => {
    const key = event.key;
    if (key === 'Enter') {
        handleEval(display.value);
    } else if (key === 'Escape') {
        handleClear();
    } else if (key === 'Backspace') {
        handleErase(display.value);
    } else if (key === '.') {
        handleDisplay('.');
    } else if (key === '/') {
        handleDisplay('/');
    } else if (key === '(') {
        handleDisplay('(');
    } else if (key === ')') {
        handleDisplay(')');
    } else if (key === '*') {
        handleDisplay('*');
    } else if (key === '-') {
        handleDisplay('-');
    } else if (key === '+') {
        handleDisplay('+');
    } else if (key === '1') {
        handleDisplay('1');
    } else if (key === '2') {
        handleDisplay('2');
    } else if (key === '3') {
        handleDisplay('3');
    } else if (key === '4') {
        handleDisplay('4');
    } else if (key === '5') {
        handleDisplay('5');
    } else if (key === '6') {
        handleDisplay('6');
    } else if (key === '7') {
        handleDisplay('7');
    } else if (key === '8') {
        handleDisplay('8');
    } else if (key === '9') {
        handleDisplay('9');
    } else if (key === '0') {
        handleDisplay('0');
    } else if (key === '=') {
        handleEval(display.value);
    } else if (key === '^') {
        handleSquare();
    }
}

document.addEventListener('keydown', handleKeys);