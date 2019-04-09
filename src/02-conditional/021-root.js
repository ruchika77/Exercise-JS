let n1 = "Not perfect square";
let n2 = "Coefficient is rational";
let n3 = "Imaginary and unequal";

function quadratic(a, b, c) {
    let result;
    let d = ((b * b) - (4 * a * c));
    result = { root: d };
    if (d > 0) {
        result.nature = n1;
    } else if (d ==0) {
        result.nature = n2;
    } else {
        result.nature = n3;
    }
    return result;
}
module.exports = {
    quadratic,n1,n2,n3
};
