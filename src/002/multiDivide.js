function multiply(a, b) {
    let multiResult = Math.round(a * b)
    return multiResult;
}

function divide(a, b) {
    let divResult = Math.round(a / b)
    return divResult;
}

module.exports = {
    multiply, divide
};