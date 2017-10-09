import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import editor from './reducers';

let store = createStore(editor);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Editor></Editor>
        </Provider>
      </div>
    );
  }
}

export default App;
