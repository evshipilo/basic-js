class VigenereCipheringMachine {

    constructor(mode) {
        this.mode = mode;
    }

    encrypt(message, key) {

        if (!message || !key) throw Error('oops');
        let arr = message.toUpperCase().split('');
        let kEY = key.toUpperCase();
        let keyArr = [];
        for (let i = 0, j = 0; i < arr.length; i++) {
            if(arr[i].charCodeAt(0)<91 && arr[i].charCodeAt(0)>64 )
                keyArr.push(kEY[j]);
            else {keyArr.push('*'); j--;}
            j++;
            if (j === kEY.length) j = 0;
        }

        let cryptoArr = arr.map(
            function (item, index) {
                let code = item.charCodeAt(0);
                if (code < 65 || code > 90) return item;
                else {
                    let shiftCode = code + (keyArr[index].charCodeAt(0)-65);
                    if (shiftCode > 90) shiftCode -= 26;
                    return String.fromCharCode(shiftCode);
                }
            });
        if (this.mode === false) return cryptoArr.reverse().join('');
        else return cryptoArr.join('');

    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) throw Error('oops');
        let arr = encryptedMessage.toUpperCase().split('');
        let kEY = key.toUpperCase();
        let keyArr = [];
        for (let i = 0, j = 0; i < arr.length; i++) {
            if(arr[i].charCodeAt(0)<91 && arr[i].charCodeAt(0)>64 )
                keyArr.push(kEY[j]);
            else {keyArr.push('*'); j--;}
            j++;
            if (j === kEY.length) j = 0;
        }

        let cryptoArr = arr.map(
            function (item, index) {
                let code = item.charCodeAt(0);
                if (code < 65 || code > 90) return item;
                else {
                    let shiftCode = code - (keyArr[index].charCodeAt(0)-65);
                    if (shiftCode < 65) shiftCode += 26;
                    return String.fromCharCode(shiftCode);
                }
            });
        if (this.mode === false) return cryptoArr.reverse().join('');
        else return cryptoArr.join('');
    }
}
module.exports = VigenereCipheringMachine;
