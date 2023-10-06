// alert('Im working. Im JS. Im beautiful. Im worth it.');/* 경고메세지 */
console.log('Im working. Im JS. Im beautiful. Im worth it.');/* 경고메세지 */

/* 모든 브라우저에는 JS설치되어있다 */

let a =221;
const b= a-5;
a=4;
console.log(b);

/* expression은 한줄에 있어야 한다
자스도 ; 있어야한다
규칙은 초기화 전에 넣어야 한다
이미 생성된것은 참조만 하면 된다... 개기본인듯...
JavaScript는 위에서 아래로 실행한다.

let : 변수. 변하는
const : 상수. 안변하는... constant라는 뜻

변수를 선언할때 디폴트는 const 
정말로 필요할때만 let을 쓴다.
*/

/* 

Object
Arrary 
데이터를 저장...


*/
const monday="Mon";
const tue="Tue";
const wed="Wed";
const thu="Thu";
const fri="Fir";
console.log(monday, tue, wed, thu, fri);

const daysOfWeek=["Mon","Tue","Wed", "Thu","Fri","Sat","Sun"];

console.log(daysOfWeek);

// Object로 데이터 정렬하기
const nicoInfo=["Nico", "55",true,"Seoul"];
/* 오브젝트는 실제 객체를 만드는것 
내가만든 객체에 라벨을 주는것
*/
const nicoInfo2={name:"Nico", age: "55",gender:"Male",isHansome:true};

console.log(nicoInfo);

console.log(nicoInfo2.gender);
nicoInfo2.gender="Female";
console.log(nicoInfo2.gender);
//이렇게 바꿀수 있다 const 안에 있는 값을 바꾸는것 가능
//오브젝트를 어레이 안에 넣는것 가능
const nicoInfo3={
  name:"Nico", 
  age: "55",
  gender:"Male",
  isHansome:true,
  favMovies:["a","b","c"],
  food:[
    {
      name:'kimchi', 
      fatty:false
    },
    {
      name:'hamberger',
      fatty: true
    }
  ]
};
console.log(nicoInfo3);

console.log(console);

/* JavaScript함수 정의 문법
함수는 
*/
function sayHello(params) {
  
}