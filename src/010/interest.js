function simple(principle, rate, time) {
    let simpleInterest = principle*(1+rate*time)
    return simpleInterest;
}

function compound(principle, rate, time) {
    let compoundInterest = Math.round(principle*(1+rate/time))
    return compoundInterest;
}

module.exports = {
    simple, compound
};