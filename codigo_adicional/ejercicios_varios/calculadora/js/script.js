const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (button.id === '=') {
            display.value = eval(display.value);
            resetDisplay = true;
        } else if (button.id === 'ac') {
            display.value = '';
            resetDisplay = false;
        } else if (button.id === 'del') {
            display.value = display.value.slice(0, -1);
        } else {
            if (resetDisplay) {
                display.value = button.id;
                resetDisplay = false;
            } else {
                display.value += button.id;
            }
        }
    });
});