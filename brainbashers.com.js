const fields = document.querySelectorAll('.unequaltd input');
const dimension = Math.sqrt(fields.length);
fields.forEach((field) => {
    field.addEventListener('keyup', (event) => {
        const id = field.parentElement.id
        const position = parseInt(id.substring(2, 4));
        changeFocus(getNewPosition(event.keyCode, position));
    });
});

const getNewPosition = (keyCode, position) => {
    if(keyCode === 37) {
        return position - 1;
    }
    if(keyCode === 38) {
        return position - 10;
    }
    if(keyCode === 39) {
        return position + 1;
    }
    if(keyCode === 40) {
        return position + 10;
    }
};

const changeFocus = (newPosition) => {
    const element = document.getElementById('td' + newPosition);
    if (element) {
        element.firstElementChild.focus();
    }
};
