import React, { Component } from 'react';
import './Editor.css';
import Doc from './Edt/Doc';
import Toolbar from './Edt/Toolbar';
import Controlbar from './Edt/Controlbar';

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
    return (
      <div className="editor">
        <Toolbar drag={this.drag}></Toolbar>
        <Controlbar></Controlbar>
        <Doc layoutMode={this.state.toolDrag}></Doc>
      </div>
    );
  }
}

export default Editor;
