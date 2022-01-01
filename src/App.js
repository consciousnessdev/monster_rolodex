import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
class App extends Component {

  constructor() {
    super();

    this.state = {
      string: 'Hello Yihua Zhang'
    }
  }

  render() {
    const { string } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {
              string
            }
          </p>
          <button
            onClick={() => this.setState({ string: 'Hello Andrei' })}
          >
            Change Text
          </button>
        </header>
      </div>
    )
  }
}

export default App;
