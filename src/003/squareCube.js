function square(a) {
    let sqr = Math.round(a * a)
    return sqr;
}

function cube(a) {
    let cub = Math.round(a * a * a)
    return cub;
}

module.exports = {
    square, cube
};