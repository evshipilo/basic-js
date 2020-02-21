module.exports = function transform(arr) {
    if (!(arr instanceof Array)) throw new Error('not array');
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-next' && (i + 1) < arr.length) {
            i++;
            continue;
        } else {
            if (arr[i] == '--discard-prev' && (i - 1) >= 0) {
                result.pop();continue;
            } else {
                if (arr[i] == '--double-next' && (i + 1) < arr.length){
                    result.push(arr[i+1]);continue;
                }
                else {
                    if (arr[i] == '--double-prev' && (i - 1) >= 0){
                       result.push(arr[i-1]);continue;
                    }
                }
            }
        }
        result.push(arr[i]);
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i] == '--discard-next' ||
            result[i] == '--discard-prev' ||
            result[i] == '--double-next' ||
            result[i] == '--double-prev') {
            result.splice(i, 1);
            i--;
        }
    }
    return result;
};
