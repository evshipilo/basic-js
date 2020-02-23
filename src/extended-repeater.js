module.exports = function repeater(str, options) {
    if(options.separator==undefined) options.separator='+';
    if(options.additionSeparator==undefined) options.additionSeparator='|';
    if(options.addition===null) options.addition='null';
    if(options.addition!=undefined) options.addition=String(options.addition);

    options.separator=String(options.separator);
    options.additionSeparator=String(options.additionSeparator);

    str=String(str);
    if(options.repeatTimes==undefined) options.repeatTimes=1;
    if(options.additionRepeatTimes==undefined) options.additionRepeatTimes=1;

    let subArr=[];
    for(let i=0;i<options.additionRepeatTimes;i++) subArr.push(options.addition);
    let subStr=subArr.join(options.additionSeparator);
    let resArr=[];
    for (let i=0; i<options.repeatTimes; i++) resArr.push(str+subStr);
    let resStr=resArr.join(options.separator);
    return resStr;

};
  