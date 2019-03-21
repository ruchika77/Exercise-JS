const POS = 'positive';
const NEG = 'negative';

function posNeg(n1) {
    if (n1 > 0) {
        return POS;
    } else {
        return NEG;
    }

}
module.exports = {
    posNeg, POS, NEG
};
