function convertTemperature(fahrenheit) {
    let celcius = Math.round((fahrenheit - 32) * 5 / 9);
    return celcius;
}
module.exports = {
    convertTemperature
};