import React, {Component} from 'react';
// import ReactDom from 'react-dom';
import {
  Row,
  Col,
  Tabs,
  Form,
  Input,
  Button,
  Radio,
  Slider,
  Switch
} from 'antd';

class Controlbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btn: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  componentWillUpdate=(props)=>{
    if(props.edt){
      if(!this.state.bind){
      this.setState({bind:true});
    }
    }
  }

  btnClick = (type)=>{
    if(this.state.bind){
      this.props.edt.command({level:0,type})
    }
  }

  render() {
    const formItemLayout = {
      labelCol: {
        sm: {
          span: 6
        }
      },
      wrapperCol: {
        sm: {
          span: 18
        }
      }
    };

    const tabsStyle = {
      maxWidth: '280px'
    }

    return (
      <div className="controlbar">
        <Tabs defaultActiveKey="1" style={tabsStyle}>
          <Tabs.TabPane tab="Font&Para" key="1">
            <b>Inline</b>
            <div className="btns">
              <Button size="small" onClick={()=>this.btnClick(0)}>
                <b>B</b>
              </Button>
              <Button size="small" onClick={()=>this.btnClick(1)}>
                <i>I</i>
              </Button>
              <Button size="small" onClick={()=>this.btnClick(2)}>
                <del>S</del>
              </Button>
              <Button size="small" onClick={()=>this.btnClick(3)}>
                <u>U</u>
              </Button>
            </div>
            <Form>
              <Form.Item {...formItemLayout} label="Font Size" hasFeedback>
                <Row gutter={8}>
                  <Col span={19}>
                    <Slider min={8} max={36} defaultValue={12}/>
                  </Col>
                  <Col span={5}>
                    <Input/>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item {...formItemLayout} label="Font Color" hasFeedback></Form.Item>
            </Form>
            <b>Paragraph</b>
            <Form>
              <Form.Item {...formItemLayout} label="Justify" hasFeedback>
                <Button.Group size='small'>
                  <Button type="primary">Left</Button>
                  <Button>Center</Button>
                  <Button>Right</Button>
                  <Button>Full</Button>
                </Button.Group>
                <Radio.Group size="small">
                  <Radio.Button value="left">Left</Radio.Button>
                  <Radio.Button value="center">Center</Radio.Button>
                  <Radio.Button value="right">Right</Radio.Button>
                  <Radio.Button value="full">Full</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item {...formItemLayout} label="Back Color" hasFeedback>
                <Input/>
              </Form.Item>
              <Form.Item {...formItemLayout} label="Back Color" hasFeedback>
                <Row gutter={8}>
                  <Col span={18}>
                    <Slider max={255} defaultValue={12}/>
                  </Col>
                  <Col span={6}>
                    <Input/>
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={18}>
                    <Slider max={255} defaultValue={12}/>
                  </Col>
                  <Col span={6}>
                    <Input/>
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={18}>
                    <Slider max={255} defaultValue={12}/>
                  </Col>
                  <Col span={6}>
                    <Input/>
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={8} style={{'textAlign':'right'}}>
                    Hex Value:
                  </Col>
                  <Col span={10}>
                    <Input/>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Page" key="3">
            <Form>
              <Form.Item {...formItemLayout} label="Layout" hasFeedback>
                <Switch defaultChecked={false}/>
              </Form.Item>
            </Form>
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Controlbar;
