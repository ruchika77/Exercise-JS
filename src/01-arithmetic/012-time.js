function calculateTime(sec) {
    let minutes = Math.round(sec / 60); //quotient is minutes
    let seconds = sec % 60; //remainder is seconds
    let hour = Math.round(minutes / 60);
    let min = minutes % 60; //remainder is minutes
    return {
        h: hour,
        m: min,
        s: seconds
    };
}
module.exports = {
    calculateTime
};