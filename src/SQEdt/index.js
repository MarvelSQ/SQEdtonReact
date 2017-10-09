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
import Status from './Status';
import Drag from './Drag';

class Edt {
  constructor(element){
    this.el = element;
    Drag.init(this.el);
    Status.init(this.el);
  }

  init(){
    this.editDoc();
    this.el.classList.add('edt-page');
  }

  editDoc(){
    this.el.setAttribute('contenteditable','true');
    Drag.unbind();
  }

  editLayout(){
    this.el.setAttribute('contenteditable','false');
    Drag.bind();
  }

  createNewPara(type){
    let newPara = document.createElement('div');
    newPara.classList.add('para');
    return newPara;
  }

}

export default Edt;
