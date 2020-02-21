module.exports = function transform(arr) {
    //if (!arr.isArray) throw new Error('not array');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-next' && (i + 1) < arr.length) arr.splice(i + 1, 1);
        if (arr[i] == '--discard-prev' && (i - 1) >= 0) {
            arr.splice(i - 1, 1);
            i--;
        }
        if (arr[i] == '--double-next' && (i + 1) < arr.length) arr.splice(i + 1, 0, arr[i + 1]);
        if (arr[i] == '--double-prev' && (i - 1) >= 0) {
            arr.splice(i - 1, 0, arr[i - 1]);
            i++;
        }

    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-next' ||
            arr[i] == '--discard-prev' ||
            arr[i] == '--double-next' ||
            arr[i] == '--double-prev') {
            arr.splice(i,1); i--;
        }
    }
    return arr;
};
