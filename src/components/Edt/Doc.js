import React, { Component } from 'react';
import 'sqedt/dist/style.css';
import Edt from 'sqedt/ES';
import {initEdt} from '../../actions';

class Doc extends Component {
  constructor(props){
    super(props);
    this.state = {
      paras : ['1','2','3','4',],
      edt:undefined,
    }
    // this.modifyLayout = this._modifyLayout.bind(this)
  }

  componentDidMount(){
    let edt = new Edt(this.refs.edt,{format:true});
    this.props.dispatch(initEdt(edt));
    edt.init();
    // this.setState({edt});
    // edt.init();
    // this.refs.edt.addEventListener('selectionchange',function(e){
    //   console.log(e);
    // })
  }

  // componentWillUpdate=(props)=>{
  //   if(props.layoutMode){
  //     this.modifyLayout();
  //   }else{
  //     if(this.state.edt){
  //     this.state.edt.editDoc();
  //     }
  //   }
  // }

  modifyLayout = () => {
    this.state.edt.editLayout();
  }

  render(){
    return (
      <div className="doc">
        <div className="wrapper">
          <div ref="edt" className="paper">
          {
            this.state.paras.map((n,i) => <div className="para" key={i}>{n}<span style={{'color':'#212121','fontSize':'36px',textDecoration:'underline'}}><b>The MIT License (MIT)</b></span>
            <span style={{'color':'#888888','fontSize':'20px'}}><i>Copyright (c) 2017-present <b>Qiang Sun</b></i></span>
            <span style={{'color':'#212121','fontSize':'16px'}}><del>Permission</del> is hereby granted, free of charge, to any person obtaining a copy
            of this software and <u>associated documentation</u> fil<s>es <b>(the "Software")</b>, to deal
            in the Software without <sub>restriction, including</sub> without limitatio</s>n the rights
            to use, copy, modify, merge, <sup>publish, distribute, s</sup>ublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:</span></div>)
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
