const fields = document.querySelectorAll('.unequaltd input');
const dimension = Math.sqrt(fields.length);
fields.forEach((field) => {
    field.addEventListener('keyup', (event) => {
        const id = field.parentElement.id
        const position = parseInt(id.substring(2, 4));
        changeFocus(getNewPosition(event.keyCode, position, field.selectionStart, field.value.length, field.readOnly));
    });
});

previousCaretPositions = [];
fields.forEach((field) => {
    field.addEventListener('keydown', () => {
        const id = field.parentElement.id
        const position = parseInt(id.substring(2, 4));
        previousCaretPositions[position] = field.selectionStart;
    });
});

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
