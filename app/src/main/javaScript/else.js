/* 
&& 둘다 참이어야한다
true && true = true
false && true= false
true  && false=false
false && false=false

true || true = true
false || true= true
true  || false=true
false || false=false
*/
const age=prompt('니 몇살이거?')

if(age>18 && age < 21){
  console.log('you can drink it')
}else if(age> 18){
  console.log('go ahead')
}