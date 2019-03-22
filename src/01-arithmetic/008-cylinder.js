function volume(radius,height) {
    let volumeCylinder = 3.14 * radius * radius * height
    return Math.round(volumeCylinder);
}

module.exports = {
    volume
};