import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import Lifecycles from './lifecycles.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      showChild: true,
      text: '',
    }
  }

  render() {
    const { string } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button
            className="button"
            onClick={() =>
              this.setState((state) => ({ showChild: !state.showChild }))
            }
          >
            Toggle Lifecycles
          </button>
          <button
            className="button"
            onClick={() =>
              this.setState((state) => ({ text: state.text + '_hello' }))
            }
          >
            Update Text
          </button>
          {
            this.state.showChild ? <Lifecycles text={this.state.text} /> : null
          }
        </header>
      </div>
    );
  }
}

export default App;
