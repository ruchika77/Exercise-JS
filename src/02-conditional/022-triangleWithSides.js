const EQUILATERAL = "equilateral";
const ISOSCELES = "isosceles";
const SCALENE = "scalene";

function triangle(s1, s2, s3) {
    let result;
    if ((s1 == s2) && (s2 == s3)) {
        result = EQUILATERAL;
    } else if (((s1 == s2) && (s2 != s3)) || (s1 == s3) && (s2 != s3)) {
        result = ISOSCELES;
    } else {
        result = SCALENE;
    }
    return result;
}
module.exports = {
    triangle, EQUILATERAL, ISOSCELES, SCALENE
};