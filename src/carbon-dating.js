const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

    if (!isFinite(parseFloat(sampleActivity)) || arguments.length != 1 ||
        parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > 15 ||
        typeof sampleActivity != 'string')  return false;

    let year = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /
        (0.693 / HALF_LIFE_PERIOD));

    return year;
};
