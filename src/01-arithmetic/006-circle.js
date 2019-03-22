function area(radius) {
    let areaCircle = 3.14 * radius * radius
    return Math.round(areaCircle);
}

function circumference(radius) {
    let circumferenceCircle = 2 * 3.14 * radius
    return Math.round(circumferenceCircle);
}

module.exports = {
    area, circumference
};