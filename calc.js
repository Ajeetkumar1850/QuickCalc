
document.querySelector('#display').value = null;
function appendToDisplay(value) {
    currentDisplay += value;
    document.querySelector('#display').value = currentDisplay;
}
function clearDisplay() {
    currentDisplay = '';
    document.querySelector('#display').value = currentDisplay;
}
function calculateResult() {
    try {
        let result = eval(currentDisplay);
        currentDisplay = result.toString();
        document.querySelector('#display').value = currentDisplay;
    } catch (error) {     
        currentDisplay = 'Error';
        document.querySelector('#display').value = currentDisplay;
    }
}
