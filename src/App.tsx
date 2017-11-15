import * as React from 'react';
import './App.css';
import CPUTest from './CPUTest';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the <a href="https://github.com/tangx246/cpustresser">CPU Stresser</a></h2>
        </div>
        <CPUTest />
      </div>
    );
  }
}

export default App;
