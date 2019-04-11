const LOWER = 'lowercase';
const UPPER = 'uppercase';

function characterCase(string) {
    let result;
    let code = string.charCodeAt(0)
    if (code >= 97 && code <= 122) {
        result = LOWER;
    } else {
        result = UPPER;
    }
    return result;
}
module.exports = {
    characterCase, LOWER, UPPER
};
