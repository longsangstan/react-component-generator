import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/jsx/jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

import generateES6Component from './lib/generateES6Component';
import generatePureComponent from './lib/generatePureComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      code: this.generateCode('', false),
      isStateless: false,
    }
  }

  onNameChange = (event, newValue) => {
    this.setState({
      name: newValue,
      code: this.generateCode(newValue, this.state.isStateless)
    })
  }

  onIsStatelessChange = (event, isInputChecked) => {
    this.setState({
      isStateless: isInputChecked,
      code: this.generateCode(this.state.name, isInputChecked)
    })
  }

  generateCode = (name, isStateless) => {
    let code = isStateless ? generatePureComponent(name) : generateES6Component(name);
    if (!name) code = `// Your code will be generated here.`;

    return code;
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React Component Generator</h2>
            <a 
              href="https://github.com/longsangstan/react-component-generator"
              style={{color: 'white', textDecoration: 'none'}}
            >
              https://github.com/longsangstan/react-component-generator
            </a>
          </div>

          <p>YourComponentName</p>
          <TextField
            className="TextField"
            style={{
              marginTop: -20,
              marginBottom: 8
            }}
            value={this.state.name}
            onChange={this.onNameChange}
          />

          <Checkbox
            style={{
              width: 20,
              margin: 10
            }}
            label="isStateless?"
            checked={this.state.isStateless}
            onCheck={this.onIsStatelessChange}
          />

          <CodeMirror
            className="CodeMirror" 
            value={this.state.code}
            options={{
              mode: 'jsx',
              lineNumbers: true,
            }} 
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
