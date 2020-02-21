module.exports = function getSeason( date ) {

if(!date) return 'Unable to determine the time of year!';
if (Object.keys(date).length > 0) throw new Error('invalid argument');

let  season='';

if(date.getMonth()==11 || date.getMonth()<=1) season='winter';
else {
if(date.getMonth()>=2 && date.getMonth()<=4) season='spring';
else {
if(date.getMonth()>=5 && date.getMonth()<=7) season='summer';
else {
if(date.getMonth()>=8 && date.getMonth()<=10) season='autumn';
else return 'Unable to determine the time of year!';}}}


return season;

};
