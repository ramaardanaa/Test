const rawJson = '[{"username":"ali","hair_color":"brown","height":1.2},{"username":"marc","hair_color":"blue","height":1.4},{"username":"joe","hair_color":"brown","height":1.7},{"username":"zehua","hair_color":"black","height":1.8}]'

function improvedJson(json){
  const data = JSON.parse(json)
  const result = data.reduce((obj,item) => {
    obj['h'] = Object.keys(item)
    obj['d'] = obj['d'] || []
    obj['d'].push(Object.values(item))
    return obj
  },{});
   return JSON.stringify(result)
}


console.log(improvedJson(rawJson))