function square(num) {
    let sqr = Math.round(num * num)
    return sqr;
}

function cube(num) {
    let cub = Math.round(num * num * num)
    return cub;
}

module.exports = {
    square, cube
};