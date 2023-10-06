const title=document.querySelector("#title");

function handleClick() {
  title.computedStyleMap.color='blue';
}

title.addEventListener("click",handleClick)

