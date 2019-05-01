// add solution here
function theBeatlesPlay(bandMembers,instruments){
  let beatlesArray = []
  for(var i = 0; i < bandMembers.length;i++){
    beatlesArray.push(`${bandMembers[i]} plays ${instruments[i]}`)
  }
  return beatlesArray
}

function johnLennonFacts(facts){
  let index = 0;
  let fact_array = [];
  while(index < facts.length){
    fact_array.push(`${facts[index]}!!!`)
    index++
  }
  return fact_array
}
