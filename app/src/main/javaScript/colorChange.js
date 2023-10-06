const title=document.querySelector('#title');

const BASE_COLOR='rgb(52, 73, 94)';
const OTHER_COLOR='#7f8c8d'

function handleClick(){
  // console.log(title.style.color)
  const currentColor=title.style.color;
  if(currentColor===BASE_COLOR){
    title.style.color=OTHER_COLOR;
  }else{
    title.style.color=BASE_COLOR;
  }
}

function init(){
  title.style.color=BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();

/* 온라인인지 오프라인인지 와이파이 상태체크 */
function handleOffline() {
  console.log("lalalala");
}
function handleOnline() {
  console.log("Welcome back");
}

window.addEventListener("offline", handleOffline)
window.addEventListener("online", handleOnline)