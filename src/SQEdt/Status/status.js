/**
 * {inline,para,full}
 * @param       {[type]} status [description]
 * @constructor
 */

function computeStyle(selection,el) {
  let inline,
    para,
    full;
  if (selection.type === 0) {
    let tmp = selection.select.commonAncestorContainer.nodeName;
    if (tmp !== '#text') {
      inline = inlineStyle(selection.select.commonAncestorContainer);
    } else {
      inline = inlineStyle(selection.select.commonAncestorContainer.parentNode);
    }
    para = paraStyle(selection.parent);
  }
  full = paraStyle(el);
  console.log(inline,para,full);
  return {inline, para, full};
}

function inlineStyle(el){
  let {color,fontSize,lineHeight,backgroundColor,fontStyle,fontWeight,textDecoration} = window.getComputedStyle(el);
  return {color,fontSize,lineHeight,backgroundColor,fontStyle,fontWeight,textDecoration};
}

function paraStyle(el){
  let {color,fontSize,lineHeight} = window.getComputedStyle(el);
  return {color,fontSize,lineHeight}//,marginTop,marginLeft,marginRight,marginBottom,paddingTop,paddingLeft,paddingRight,paddingBottom};
}

function judgeFont(el){
  let sizes = [];
  let colors = [];
  let bgColors = [];
  [...el.querySelectorAll('*')].forEach(e=>{
    sizes.push(e.style.fontSize);
    colors.push(e.style.color);
    bgColors.push(e.style.backgroudColor);
  })
}

function judgeStyle(type,el){
  [...el.querySelectorAll(type)].forEach(e=>e.remove());
  return el.innerText==='';
}

export default {
  computeStyle
}
