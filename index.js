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


const keyHandlerMap = new Map([
    ['Enter', () => handleEval(display.value)],
    ['Escape', handleClear],
    ['Backspace', () => handleErase(display.value)],
    ['.', () => handleDisplay('.')],
    ['/', () => handleDisplay('/')],
    ['(', () => handleDisplay('(')],
    [')', () => handleDisplay(')')],
    ['*', () => handleDisplay('*')],
    ['-', () => handleDisplay('-')],
    ['+', () => handleDisplay('+')],
    ['1', () => handleDisplay('1')],
    ['2', () => handleDisplay('2')],
    ['3', () => handleDisplay('3')],
    ['4', () => handleDisplay('4')],
    ['5', () => handleDisplay('5')],
    ['6', () => handleDisplay('6')],
    ['7', () => handleDisplay('7')],
    ['8', () => handleDisplay('8')],
    ['9', () => handleDisplay('9')],
    ['0', () => handleDisplay('0')],
    ['=', () => handleEval(display.value)],
    ['^', handleSquare],
])

const handleKeys = (event) => {
    const key = event.key;
    const action = keyHandlerMap.get(key);
    if (action) {
        action();
    }
}

document.addEventListener('keydown', handleKeys);