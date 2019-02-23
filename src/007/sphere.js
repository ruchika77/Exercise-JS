function area(num) {
    let areaSphere = 4 * 3.14 * num * num
    return Math.round(areaSphere);
}

function volume(num) {
    let volumeSphere = 4 / 3 * 3.14 * num * num * num
    return Math.round(volumeSphere);
}

module.exports = {
    area, volume
};