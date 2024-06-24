const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

let resetDisplay = false;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (button.id === '=') {
            try {
                display.value = eval(display.value) || "0";
            } catch {
                display.value = "Error";
            }
            resetDisplay = true;
        } else if (button.id === 'ac') {
            display.value = '0';
            resetDisplay = false;
        } else if (button.id === 'del') {
            if (display.value.length > 1) {
                display.value = display.value.slice(0, -1);
            } else {
                display.value = '0';
            }
        } else {
            if (resetDisplay || display.value === '0') {
                display.value = button.id;
                resetDisplay = false;
            } else {
                display.value += button.id;
            }
        }
    });
});
