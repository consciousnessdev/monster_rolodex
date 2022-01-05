import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
class App extends Component {
  // note: if need passed props within constructor, must passed props
  constructor(props) {
    super(props);

    this.state = {
      meaningOfLife: 47,
    };
  }

  // another state declaration, because of babel & CRA
  // state = {}

  handleClick = () => {
    /**
     * NOTE: state update is synchronous, but second parameter is asynchronous
     */
    // synchronouse
    this.setState((prevState, prevProps) => ({
      // passed prevState & prevProps
      meaningOfLife: prevState.meaningOfLife + prevProps.increment,
    }), () => {
      // asynchronous
      console.log(this.state.meaningOfLife);
    });
  };

  render() {
    const { meaningOfLife } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{meaningOfLife}</p>
          <button onClick={this.handleClick}>Update State</button>
        </header>
      </div>
    );
  }
}

export default App;
