function area(radius) {
    let areaSquare = radius * radius
    return areaSquare;
}

function perimeter(radius) {
    let perimeterSquare = 4 * radius
    return perimeterSquare;
}

module.exports = {
    area, perimeter
};