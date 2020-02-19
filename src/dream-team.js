module.exports = function createDreamTeam( members ) {

  if(!(members instanceof Array) ) return false;

  let dreamTeamArr=[];

for(let a of members){
  if(typeof a=='string') {
    dreamTeamArr.push(a.replace(/^\s*/,'')[0].toUpperCase());
  }
}
  return dreamTeamArr.sort().join('');
};