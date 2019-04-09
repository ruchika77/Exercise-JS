const RAT = "right angle triangle";
const AAT = "acute angle triangle";
const OAT = "obtuse angle triangle";
const NAT = "not a triangle";

/*function typeOfTriangle(a1, a2, a3) {
    if (a1 + a2 + a3 == 180) {
        if (a1 == 90 || a2 == 90 || a3 == 90) {
            return RAT;
        } else if (a1 < 90 && a2 < 90 && a3 < 90) {
            return AAT;
        } else if (a1 > 90 || a2 > 90 || a3 > 90) {
            return OAT;
        } 
    }else {
        return NAT;
    }
}
module.exports = {
    typeOfTriangle, RAT, AAT, OAT, NAT
};*/
function sum(a1, a2, a3) {
    return a1 + a2 + a3;
}
function right(a1, a2, a3) {
    if (a1 == 90 || a2 == 90 || a3 == 90) {
        return RAT;
    }
}
function acute(a1, a2, a3) {
    if (a1 < 90 || a2 < 90 || a3 < 90) {
        return AAT;
    }
}
function obtuse(a1, a2, a3) {
    if (a1 > 90 || a2 > 90 || a3 > 90) {
        return OAT;
    }
}
function typeOfTriangle(a1, a2, a3) {
    let addition = sum();
    console.log("Addition of 3 numbers is", addition)
    if (addition == 180) {
        if (right()) {
            return RAT;
        } else if (acute()) {
            return AAT;
        } else if (obtuse()) {
            return OAT;
        }
    } else {
        return NAT;
    }
}
module.exports = {
    typeOfTriangle, sum, right, acute, obtuse, NAT, RAT, AAT, OAT
};