module.exports = function getSeason( date ) {

let date1=date;
let  season='';

if(date1.getMonth()==11 || date1.getMonth()<=1) season='winter';
if(date1.getMonth()>=2 && date1.getMonth()<=4) season='spring';
if(date1.getMonth()>=5 && date1.getMonth()<=7) season='summer';
if(date1.getMonth()>=8 && date1.getMonth()<=10) season='autumn';
return season;

};
