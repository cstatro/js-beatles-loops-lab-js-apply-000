// add solution here
function theBeatlesPlay(bandMembers,instruments){
  let beatlesArray = []
  for(var i = 0; i < bandMembers.length;i++){
    beatlesArray.push(`${bandMembers[i]} plays ${instruments[i]}`)
  }
  return beatlesArray
}
