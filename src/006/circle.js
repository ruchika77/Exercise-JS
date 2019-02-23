function area(a) {
    let areaCircle = 3.14*a*a
    return Math.round(areaCircle);
}

function circumference(a) {
    let circumferenceCircle = 2*3.14*a
    return Math.round(circumferenceCircle);
}

module.exports = {
    area, circumference
};