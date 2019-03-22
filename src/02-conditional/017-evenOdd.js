const ODD = 'odd';
const EVEN = 'even';

function oddEven(num) {
    if (num % 2== 0) {
        return ODD;
    } else {
        return EVEN;
    }

}
module.exports = {
    oddEven, ODD, EVEN
};
