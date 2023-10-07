let input = '';

function appendToInput(value) {
    input += value;
    document.getElementById('result').value = input;
}

function clearInput() {
    input = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        const result = eval(input);
        document.getElementById('result').value = result;
        input = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
