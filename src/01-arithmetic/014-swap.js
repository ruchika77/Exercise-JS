function swap(num1, num2) {
    let temp = 0;
    temp= num1;
    num1 = num2;
    num2 = temp;
    return {
        n1: num1,
        n2: num2
    };
}
module.exports = {
    swap
};
