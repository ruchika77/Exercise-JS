const bigOfTwo = (num1, num2) => (num1 > num2) ? num1 : num2;

function bigOfThree(num1, num2, num3) {
    let a = bigOfTwo(num1, num2);
    let b = bigOfTwo(a, num3);
    return b;
}

module.exports = {
    bigOfThree
};
