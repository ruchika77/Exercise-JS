function multiply(num1, num2) {
    let multiResult = Math.round(num1 * num2)
    return multiResult;
}

function divide(num1, num2) {
    let divResult = Math.round(num1 / num2)
    return divResult;
}

module.exports = {
    multiply, divide
};