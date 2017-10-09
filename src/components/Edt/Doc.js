import React, { Component } from 'react';
import '../../SQEdt/style.css';
import Edt from '../../SQEdt';

class Doc extends Component {
  constructor(props){
    super(props);
    this.state = {
      paras : ['1','2','3','4','5','6','7','8',9,10,11,12],
      edt:undefined,
    }
    // this.modifyLayout = this._modifyLayout.bind(this)
  }

  componentDidMount(){
    let edt = new Edt(this.refs.edt);
    this.setState({edt});
    edt.init();
    this.addDropEvent(this.refs.edt);
  }

  addDropEvent(el){
    el.addEventListener('paste',(e)=>{
      console.log('paste',e,e.clipboardData.types);
      e.preventDefault();
      let range = window.getSelection().getRangeAt(0);
      let text = document.createTextNode(e.clipboardData.getData('text/plain'));
      range.insertNode(text);
      range.selectNode(text);
    });
    // el.addEventListener('dragstart',(e)=>console.log('start',e,e.dataTransfer.getData('text/plain')));
    // el.addEventListener('dragenter',(e)=>{
    //   console.log('enter',e,e.dataTransfer);
    //   e.dataTransfer.setData('hahah','new');
    // });
    // el.addEventListener('dragover',(e)=>{
    //   // console.log('over',e,e.dataTransfer)
    //   // console.log('over',window.getSelection().rangeCount,window.getSelection(),window.getSelection().anchorNode,window.getSelection().focusNode);
    // });
    // el.addEventListener('dragleave',(e)=>console.log('leave',e,e.dataTransfer));
    // el.addEventListener('dragend',(e)=>{
    //   console.log('end',e,e.dataTransfer);
    //   console.log(window.getSelection(),window.getSelection().rangeCount,window.getSelection().getRangeAt(0).cloneContents());
    // });
    el.addEventListener('drop',(e)=>{
      let sl = window.getSelection();
      let oRange = sl.getRangeAt(0);
      let range = document.caretRangeFromPoint(e.clientX, e.clientY);
      range.insertNode(document.createTextNode(e.dataTransfer.getData('text/plain')));
      oRange.deleteContents();
      sl.removeAllRanges();
      sl.addRange(range);
      console.log(range);
      e.preventDefault();//prevent default drop
      // console.log(window.getSelection().rangeCount);
      // console.log(window.getSelection().anchorNode);
      // e.dataTransfer.types.splice(e.dataTransfer.types.indexOf('text/html'),1);
    });
  }

  componentWillUpdate=(props)=>{
    if(props.layoutMode){
      this.modifyLayout();
    }else{
      if(this.state.edt){
      this.state.edt.editDoc();
      }
    }
  }

  modifyLayout = () => {
    this.state.edt.editLayout();
  }

  render(){
    return (
      <div className="doc">
        <div className="wrapper">
          <div ref="edt" className="paper">
          {
            this.state.paras.map((n,i) => <div className="para" key={i}>{n}. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>)
          }
          </div>
        </div>
        {/* <div ref="up" className="btn-group">
          <button className="btn"><u>&#x25B2;</u></button>
        </div> */}
      </div>
    )
  }
}

export default Doc;
