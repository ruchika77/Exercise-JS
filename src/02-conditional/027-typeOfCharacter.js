const LOWER = 'lowercase';
const UPPER = 'uppercase';
const NUM = 'number';
const SPECIALCHAR = 'specialcharacter'

function characterType(string) {
    let result;
    let code = string.charCodeAt(0)
    if (code >= 97 && code <= 122) {
        result = LOWER;
    } else if (code >= 65 && code <= 90) {
        result = UPPER;
    } else if (code >= 48 && code <= 57) {
        result = NUM;
    } else {
        result = SPECIALCHAR;
    }
    return result;
}
module.exports = {
    characterType, LOWER, UPPER, NUM, SPECIALCHAR
};
