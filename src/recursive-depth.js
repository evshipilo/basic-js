
module.exports = class DepthCalculator {
    calculateDepth(arr,depth=1) {
        if (arr.some(elem => Array.isArray(elem))) {
            return    this.calculateDepth(arr.flat(1),depth+1);
        }
        return depth;
    }
};