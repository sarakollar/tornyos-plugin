const fields = document.querySelectorAll('.unequaltd input');
const dimension = Math.sqrt(fields.length);
fields.forEach((field) => {
    field.addEventListener('keyup', (event) => {
        const position = getCurrentPosition(field);
        const newPosition = getNewPosition(event.keyCode, position, field.selectionStart, field.value.length, field.readOnly);
        changeFocus(newPosition);
    });
});

const previousCaretPositions = [];
fields.forEach((field) => {
    field.addEventListener('keydown', () => {
        const position = getCurrentPosition(field);
        previousCaretPositions[position] = field.selectionStart;
    });
});

const getCurrentPosition = (field) => {
    const id = field.parentElement.id
    return parseInt(id.substring(2, 4));
};

const getNewPosition = (keyCode, position, caretPosition, inputLength, isReadOnly) => {
    if(keyCode === 37 && (isReadOnly || caretPosition === 0) ) {
        return position - 1;
    }
    if(keyCode === 38) {
        return position - 10;
    }
    if(keyCode === 39 && (isReadOnly || caretPosition === inputLength && caretPosition === previousCaretPositions[position])) {
        return position + 1;
    }
    if(keyCode === 40) {
        return position + 10;
    }
    return position;
};

const changeFocus = (newPosition) => {
    const element = document.getElementById('td' + newPosition);
    if (element) {
        element.firstElementChild.focus();
    }
};
