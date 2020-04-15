function mapToNegativize(src) {
  console.log(`Hello${name}`)
}
 
let sayHola = function(name="") {
  console.log(`Hola${name}`)
}
 
functionUsingCallback(mapToNegativize, mapToNoChange, mapToDouble, mapToSquare, function(src="") {
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push("${src}")
}
  return r
}
 
function functionUsingCallback(en, es, zh, name){
  en(name)
  es(name)
  zh(name)
}
 
/* Prints */
Hello Gary
Hola Gary
Ni Hao Gary
 
