/**
 * event
 */
const DROP = 'drop';
const dragItem = {
  drag:undefined,
  to:undefined,
  area:0,
}
const map = {
    'h1':'Title',
    'h3':'Title 2',
    'h3u':'Title 3',
    'p':'Paragraph',
    'm':'mark',
    'img':'<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506742225118&di=54b3d9b8cc6cf27ed035d243f4863c9f&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201609%2F30%2F20160930224208_yZJQT.jpeg"/>img info',
    'q':'\'quote\'',
    'c':'Code',
    'a':'<a href="#">auchor</a>',
}
let element = undefined;
let bindstate = false;

// class DragItem {
//   constructor(){
//     this.drag=undefined;
//     this.to=undefined;
//     this.area = 0;
//   }
//
//   get drag(){
//     return this.drag;
//   }
//
//   set drag(val){
//     this.drag = val;
//   }
// }

// function getDragItem(){
//   return {...ragItem};
// }
/**
 * [judgePosition description]
 * @param  {number} x  should be offsetX
 * @param  {number} y  should be offsetY
 * @param  {HTMLDIVElement} el over element
 * @return {number}    drop area
 */
function judgePosition(x,y,el){
  let w = el.offsetWidth;
  // let rx = x-el.offsetLeft;
  let h = el.offsetHeight;
  // let ry = y-el.offsetTop;
  return ((4*x)<w) ?
  1 :
  ((4*x) > (3*w))?
  2 :
  ((2*y)<h) ?3:4;
}

/**
 * [drop description]
 * @param  {node} el   [description]
 * @param  {node} toEl [description]
 * @param  {number} arae [description]
 * @return {[type]}      [description]
 */
function drop(el,toEl,area){
  let nextEl = (area===4)?toEl.nextSibling:toEl;
  let append = nextEl?el.insertBefore:el.appendChild;
  append.call(toEl.parentNode,el,nextEl);
  if(area < 3){
    el.setAttribute('position',area);
  } else{
    el.removeAttribute('position')
  }
}

function onDragStart(e){
  dragItem.drag = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setDragImage(e.target,0,0);
}

function onDragEnter(e){
  
}

function onDragOver(e){
  e.preventDefault();
  // console.log('page',e.pageX,e.pageY,e.target);
  // console.log('client',e.clientX,e.clientY);
  // console.log('offset',e.offsetX,e.offsetY,'target',e.target.offsetTop,e.target.offsetTop);
  e.target.setAttribute(DROP,judgePosition(e.offsetX,e.offsetY,e.target));
}

function onDragLeave(e){
  e.target.removeAttribute(DROP);
}

function onDragEnd(e){
  console.log('drag end');
  if(dragItem.to){
    drop(dragItem.drag,dragItem.to,dragItem.area);
  }
}

function onDrop(e){
  dragItem.area = Number(e.target.getAttribute(DROP));
  e.target.removeAttribute(DROP);
  dragItem.to = e.target;
  // console.log(e.dataTransfer,e.dataTransfer.types)
  if(e.dataTransfer.types.some(el=>el==='new')){
    let div = document.createElement('div');
    div.classList.add('para');
    div.classList.add(e.dataTransfer.getData('new'));
    div.innerHTML=map[e.dataTransfer.getData('new')];
    dragItem.drag = div;
    drop(dragItem.drag,dragItem.to,dragItem.area);
  }
}

function init(el){
  if(bindstate){
    unbind();
  }
  element = el;
}

function bind(){
  element.addEventListener('dragstart',onDragStart);
  element.addEventListener('dragenter',onDragEnter);
  element.addEventListener('dragover',onDragOver);
  element.addEventListener('dragleave',onDragLeave);
  element.addEventListener('dragend',onDragEnd);
  element.addEventListener('drop',onDrop);
  bindstate = true;
}

function unbind(){
  element.removeEventListener('dragstart',onDragStart);
  // element.removeEventListener('dragenter',onDragEnter);
  element.removeEventListener('dragover',onDragOver);
  element.removeEventListener('dragleave',onDragLeave);
  element.removeEventListener('dragend',onDragEnd);
  element.removeEventListener('drop',onDrop);
  bindstate = false;
}

export default {
  init,
  bind,
  unbind,
  onDragStart,
  onDragEnter,
  onDragOver,
  onDragLeave,
  onDrop,
}
