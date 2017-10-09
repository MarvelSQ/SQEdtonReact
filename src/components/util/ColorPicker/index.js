import React, {Component} from 'react';
import { SketchPicker } from 'react-color';
import {Button} from 'antd';
import './style.css';

class ColorPicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      default_color:'#212121',
    }
  }

  getColor=()=>{
    return 'rgb(00,00,00)';
  }

  getColorWithAlpha=()=>{
    return 'rgba()';
  }

  showPickView=()=>{

  }

  componentDidMount(){
    // document.addEventListener('click',e=>{
    //   console.log(clicked);
    // })
    // console.log(this.refs.picker)// .addEventListener('click',e=>{
    //   // clicked = true;
    // // })
  }

  render(){
    let style = {
      boxSizing:'border-box',
    }
    return(<div className="color-picker">
      <div className="btn"  onClick={this.showPickView}></div>
        <div className="modal">
          <SketchPicker ref="picker" width="90%" style={style}/>
        </div>
      </div>)
  }
}

export default ColorPicker;
