function changeCase(string) {
    let result,num;
    let code = string.charCodeAt(0);
    if (code >= 97 && code <= 122) {
        num = code - 32;
        result = String.fromCharCode(num);
    } else {
        num = code + 32;
        result = String.fromCharCode(num);
    }
    return result;
}
module.exports = {
    changeCase
};
