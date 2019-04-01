/*function bigOfThree(num1, num2, num3) {
    if ((num1 > num2) && (num1 > num3)) {
        return num1;
    } else if ((num2 > num1) && (num2 > num3)) {
        return num2;
    } else {
        return num3;
    }

}
module.exports = {
    bigOfThree
};
*/

function bigOfTwo(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function bigOfThree(num1, num2, num3) {
    if ((bigOfTwo(num1, num2)) && (bigOfTwo(num2, num3))) {
        return num1;
    } else if ((bigOfTwo(num2, num1)) && (bigOfTwo(num2, num3))) {
        return num2;
    } else {
        return num3;
    }
}
module.exports = {
    bigOfThree
};