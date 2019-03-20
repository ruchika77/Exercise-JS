function squareRoot(x1, x2, y1, y2) {
    let x = x2 - x1;
    let y = y2 - y1;
    let power = (x*x) + (y*y)
    let sqRoot = Math.sqrt(power)
    return sqRoot;
}
module.exports = {
    squareRoot
};
