import React, { Component } from 'react';

class Toolbar extends Component{
  constructor(props){
    super(props);
    this.state = {
      base:[
        {value:'h1',full:<h1>Title</h1>,less:<h1>T</h1>},
        {value:'h3',full:<h3>Title #2</h3>,less:<h3>T2</h3>,},
        {value:'h3u',full:<h3><u>Title #3</u></h3>,less:<h3><u>T3</u></h3>,},
        {value:'p',full:<p>Para</p>,less:<p>P</p>,},
        {value:'m',full:<i>Mark</i>,less:<i>M</i>,},
        {value:'img',full:<p>IMG<small>img</small></p>,less:<p>IMG</p>,},
        {value:'q',full:'"Quote"',less:'"Q"',},
        {value:'c',full:'<Code/>',less:'</>',},
        {value:'a',full:'Link',less:'A',},
      ],
      open:true,
    }
  }

  handleMenu = () =>{
    this.setState({open:!this.state.open})
  }

  dragStart = (e) => {
    if(e.target.dataset.drag){
      e.dataTransfer.setDragImage(e.target,0,0);
      let value = this.state.base[e.target.dataset.drag].value;
      if(value!=='a'){
        this.props.drag(true);
        e.dataTransfer.setData('new',value);
      } else {
        e.dataTransfer.dropEffect='copyMove';
        e.dataTransfer.setData('link',value);
      }
  }
  }

  dragEnd = (e) => {
    this.props.drag(false);
  }

  componentDidMount(){

  }

  render(){
    return (
      <div className={this.state.open?'toolbar':'toolbar close'}>
        <h2 className="toolbar-title" onClick={this.handleMenu}>SQEdt{this.state.open?' on React':''}</h2>
        <div className="item-group" onDragStart={this.dragStart} onDragEnd={this.dragEnd}>
        <p>Base</p>
        {
          this.state.base.map((e,i)=><div className="item" draggable="true" data-drag={i} key={i}>{this.state.open?e.full:e.less}</div>)
        }
      </div>
      </div>
    )
  }
}

export default Toolbar;
