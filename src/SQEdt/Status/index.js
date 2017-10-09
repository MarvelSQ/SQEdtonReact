let bind = false;
let savedchange = undefined;
function DEFUALTCALLBACK(status){
  console.log('status default callback');
  console.log(status);
}

let para_cb = DEFUALTCALLBACK;


function handleSelection(){
  let sl = window.getSelection();
  let range = sl.getRangeAt(0);
}

function selectionChange(e){
  let tmpchange = handleSelection();
  if(savedchange && savedchange != tmpchange){
    para_cb(tmpchange);
  }else{
    savedchange = tmpchange;
    para_cb(tmpchange);
  }
}

function init(el){
  el.addEventListener('selectionchange',selectionChange);
}

function command({type,level}){

}

function addCallback(fn){

}

export default {
  init,
}
