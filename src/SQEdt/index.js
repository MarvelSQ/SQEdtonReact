/**
 * 1.init element
 * 2.generate para
 *
 * prevent default
 * document.execCommand
 * delete key
 * tab key
 * clipboard
 *
 * modules:
 * selectionchange,
 * changeNode:{insertNewNode,changeTag,changeFont,changeJustify...}
 * drag & drop,
 */
import Status from './Status/status';
import Drag from './Drag/drag';
import handleSl from './HandleSelection';
import util from './util';

const inlinelist = [
  'bold',
  'italic',
  'strikeThrough',
  'underline',
  'subscript',
  'superscript',
  'fontSize',
  'fontColor'
]

const paralist = [
  'fontSize',
  'lineHeight',
  'color'
]

class Edt {
  constructor(element) {
    this.el = element;
    this.selection = undefined;
    this.rangeCopy = undefined;
    this.status = undefined;
    Drag.init(this.el);
  }

  init() {
    this.editDoc();
    this.el.classList.add('edt-page');
    document.addEventListener('selectionchange', e => {
      // console.log(e);
      if (document.activeElement === this.el) {
        let sl = window.getSelection();
        if (sl.rangeCount) {
          //judge the cursor in the el
          let tmp = handleSl.handleSelection(sl);
          let num = 0;
          if (this.selection) {
            num = handleSl.compareSelection(this.selection, tmp);
          }
          this.selection = tmp;
          this.alertUI(tmp, num);
        }
      }
    });
  }

  editDoc() {
    this.el.setAttribute('contenteditable', 'true');
    Drag.unbind();
  }

  editLayout() {
    this.el.setAttribute('contenteditable', 'false');
    Drag.bind();
  }

  alertUI(sl) {
    this.status = Status.computeStyle(sl, this.el);
  }

  /**
   * [command description]
   * @param  {number} level 0:inline,1:para,2:full
   * @param  {number} type  the index of stylelist
   * @return {[type]}       [description]
   */
  command({level, type, value}) {
    console.log(level);
    if (level === 0) {
      if (type < 6) {
        document.execCommand(inlinelist[type]);
      } else {
        console.log(this.selection.type);
        [...this.selection.origin.querySelectorAll('*')].forEach(e => {
          e.style[inlinelist[type]] = '';
          if(e.nodeName==='SPAN'&&!e.style[0]){
            util.replaceWidthChild(e);
          }
        })
        if (this.selection.type === 0) {
          let span = document.createElement('span');
          span.style[inlinelist[type]] = value;
          span.appendChild(this.selection.origin);
          this.selection.range.deleteContents();
          this.selection.range.insertNode(span);
        } else {
          [...this.selection.origin.children].forEach(para => {
            para.innerHTML = `<span style="${util.camlToHypen(inlinelist[type])}:${value}"'>${para.innerHTML}</span>`
          })
          this.selection.range.deleteContents();
          let firstChild = this.selection.origin.firstChild.children[0];
          let lastChild = this.selection.origin.lastChild.children[0];
          this.selection.origin.firstChild.remove();
          this.selection.origin.lastChild.remove();
          this.selection.range.insertNode(this.selection.origin);
          this.selection.select.startContainer.appendChild(firstChild);
          this.selection.select.endContainer.insertBefore(lastChild, this.selection.select.endContainer.firstChild);
          this.selection.range.setStart(firstChild, 0);
          this.selection.range.setEnd(lastChild, lastChild.childNodes.length);
        }
        window.getSelection().addRange(this.selection.range);
      }
    } else if (level === 1) {
      if(this.selection.type===0){
        this.selection.parent.style[paralist[type]]=value;
      } else{
        this.selection.select.startContainer.style[paralist[type]]=value;
        this.selection.select.endContainer.style[paralist[type]] = value;
        let next = this.selection.select.startContainer.nextElementSibling;
        while(next&&next!==this.selection.select.endContainer){
          next.style[paralist[type]] = value;
          next = next.nextElementSibling;
        }
      }
    } else {
      this.el.style[paralist[type]] =value;
    }
  }



  // createNewPara(type){
  //   let newPara = document.createElement('div');
  //   newPara.classList.add('para');
  //   return newPara;
  // }

}

export default Edt;
