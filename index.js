function mapToNegativize(src) {
  console.log(`Hello${name}`)
}
 
let sayHola = function(name="") {
  console.log(`Hola${name}`)
}
 
functionUsingCallback(mapToNegativize, mapToNoChange, mapToDouble,  function(name="") {
  console.log(`Ni Hao${name}`)
}, " Gary")
 
function functionUsingCallback(en, es, zh, name){
  en(name)
  es(name)
  zh(name)
}
 
/* Prints */
Hello Gary
Hola Gary
Ni Hao Gary
 
