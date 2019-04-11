const EQUAL = 'middleisequal';
const NOTEQUAL = 'middleisnotequal'
function numbers(n1, n2, n3) {
    let result;
    if (n2 == n3 + n1) {
        result = EQUAL
    } else {
        result = NOTEQUAL
    }
    return result;
}
module.exports = {
    numbers, EQUAL, NOTEQUAL
};
