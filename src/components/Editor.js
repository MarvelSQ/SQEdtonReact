import React, { Component } from 'react';
import './Editor.css';
import Doc from './Edt/Doc';
import Toolbar from './Edt/Toolbar';
import Controlbar from './Edt/Controlbar';
import {connect} from 'react-redux';

class Editor extends Component {
  constructor(props){
    super(props);
    this.state = {
      toolDrag:false,
    }
  }

  drag = (state)=>{
    this.setState({toolDrag:state});
  }

  render(){
    const { dispatch, edt } = this.props
    return (
      <div className="editor">
        <Toolbar edt={edt}></Toolbar>
        <Controlbar edt={edt}></Controlbar>
        <Doc edt={edt} dispatch={dispatch}></Doc>
      </div>
    );
  }
}

function edt(state) {
  return {
    edt: state.edt,
  }
}

export default connect(edt)(Editor);
