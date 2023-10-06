const title=document.querySelector('#title');

const CLICKED_CLASS="clicked";

function habdleClick(){
  const hasClass=title.classList.contains(CLICKED_CLASS);

  if(hasClass !==CLICKED_CLASS){
    title.classList.toggle(CLICKED_CLASS);

  }
}

function init() {
  title.addEventListener("click", habdleClick);
}

init();
