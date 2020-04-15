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
 
function functionUsingCallback(neg, nchg, dbl, sqr, src){
  neg(-1 * src[i])
  nchg(name)
  dbl(name)
  sqr(name)
}
 

