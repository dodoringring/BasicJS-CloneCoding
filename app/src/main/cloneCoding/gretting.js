const form=document.querySelector(".js-form")
  ,input = form.querySelector("input")
  ,greeting=document.querySelector(".js-greetings");

const USER_LS="currentUser",
  SHOWING_CN="showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

  /* form의 디폴트는 제출submit하고 새로고침된다.->기본동작
  그걸 막기 위해서 preventDefault() 
  디폴트를 막아준다.*/
function handleSubmit(event){
  event.preventDefault();
  const currentValue=input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit)//이벤트리스너를 추가한다. 제출 막기위해서
} 

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText=`Hello ${text}`
}
function loadName(){
  const currentUser=localStorage.getItem(USER_LS)
  if(currentUser===null){
    askForName();
  }else{
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}
init();