const toDoForm=document.querySelector(".js-toDoForm"),
  toDoInput=toDoForm.querySelector("input");
  toDoList=document.querySelector(".js-toDoList");

const TODOS_LS='toDos';//화면에서 받아오는 할일
let toDos=[];//해야할 일 화면에서 받아서 담아줄 배열 Arrary

function deleteToDo(event) {
  // console.log(event);//엑스 버튼 클릭. 그런데 어떤 버튼 클릭되었는지 모른다.
  // console.log(event.target.parentNode);//어떤 버튼 눌렀는지 확인
  const btn=event.target;
  const li=btn.parentNode;
  toDoList.removeChild(li);//부모노드의 자식노드 즉, 버튼 삭제. 그렇지만 로컬스토리지에는 남아있음.
  const cleanToDos=toDos.filter(function (toDo) {
    return toDo.id !==parseInt(li.id);
  });//ToDos에서 filterFn함수에 넣어 거름...
  console.log(cleanToDos);
  toDos=cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));//localStorage에 할일들 넣어주기
}

function paintToDo(text) {//ToDO받아오기
  // console.log(text);
  /* 지금까지는 QuerySelector로 필요한것들을 HTML에서 얻었다.
  이번에는 UL태그를 넣어줄것이다...
  태그생성하기
  document.createElement("태그")
  */
  const li=document.createElement("li");
  const delBtn=document.createElement("button");
  const span=document.createElement("span");
  const newId=toDos.length+1;
  delBtn.innerText="❌"
  delBtn.addEventListener("click", deleteToDo)
  span.innerText=text;
  li.appendChild(span);//span을 li에 넣고
  li.appendChild(delBtn);//버튼을 li에 넣는다.
  li.id=newId;
  toDoList.appendChild(li);
  const toDoObj={
    text:text,
    id:newId//초기값1
  };
  toDos.push(toDoObj);//순서....중요!
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();//새로고침 방지
  const currentValue=toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value="";//엔터누르면 초기화
}

function something(toDo) {
  console.log(toDo.text);
 }

function loadToDos() {
  const loadedToDos=localStorage.getItem(TODOS_LS);
  if(loadedToDos!==null){
    console.log(loadedToDos);//localStorage안에있는 것들은 String
    const parsedToDos=JSON.parse(loadedToDos);
    console.log(parsedToDos);
    /* ARRARY의forEach
      함수를 실행하는데 arrary에 담긴 함수를 각각 한번씩 다 실행해주는것
      forEach는 Arrary를 위한 function이다.
    */
  //  parsedToDos.forEach(something);
   parsedToDos.forEach(function(toDo){
    paintToDo(toDo.text);
   });
  }else{

  }

}//end of loadToDos

/* 필터는 forEach에서 function을 실행하는것과 같이 각각의 item에서 실행 */
function filterFn(toDo){
  return toDo.id===1 
  /* filter는 true인 toDos만 return한다. id가 1인 경우만... */
}




function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)
}

init();