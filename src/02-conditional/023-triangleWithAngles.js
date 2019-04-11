const RAT = "right angle triangle";
const AAT = "acute angle triangle";
const OAT = "obtuse angle triangle";
const NAT = "not a triangle";

function sum(a1, a2, a3) {
    return a1 + a2 + a3;

}
function right(a1, a2, a3) {
    if (a1 == 90 || a2 == 90 || a3 == 90) {
        return RAT;
    }
}
function acute(a1, a2, a3) {
    if (a1 < 90 && a2 < 90 && a3 < 90) {
        return AAT;
    }
}
function obtuse(a1, a2, a3) {
    if (a1 > 90 || a2 > 90 || a3 > 90) {
        return OAT;
    }
}
function typeOfTriangle(a1, a2, a3) {
    let addition = sum(a1, a2, a3);
    let result;
    if (addition == 180) {
        result = right(a1, a2, a3) || acute(a1, a2, a3) || obtuse(a1, a2, a3);
    } else {
        result = NAT;
    }
    return result;
}
module.exports = {
    typeOfTriangle, NAT, RAT, AAT, OAT
};