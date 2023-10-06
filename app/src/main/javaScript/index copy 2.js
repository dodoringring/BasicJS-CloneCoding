/* JavaScript함수 정의 문법
함수는 
*/
function sayHello(potato, age) {
  // console.log('hello!', potato, "you've ", age,"years old");
  return `hello!${potato} you are ${age} years old`;
}

sayHello("dodo",18);
console.log("Hi!")


const greetNicolas=sayHello("Nico", 15);
console.log(greetNicolas);

const calculator={
  plus:function (a,b) {
    return a+b
  }
}

console.log(greetNicolas);
console.log(plus)

/* 인자
argument
변수같은 느낌
함수를 준비시켜야한다
dodo는 인자이다.

자바스크립트에서는 ""도 스트링 ''도 스트링
자바스크립트에서는 백틱이 있다
``
${}
*/

