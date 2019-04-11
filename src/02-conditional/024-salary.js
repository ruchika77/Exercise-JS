function getIncome(salary, sale) {
    let result;
    if (sale >= 50000) {
        result = salary + (sale * 16 / 100)
    } else if (sale >= 40000) {
        result = salary + (sale * 14 / 100)
    } else if (sale >= 30000) {
        result = salary + (sale * 10 / 100)
    } else if (sale >= 20000) {
        result = salary + (sale * 5 / 100)
    } else if (sale >= 10000) {
        result = salary + (sale * 3 / 100)
    } else {
        result = salary + (sale * 2 / 100)
    }
    return result;
}
module.exports = {
    getIncome
};
