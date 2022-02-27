import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Lifecycles from './lifecycles.component';
import Person from './person.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      person: { name: 'Jake', age: 22 },
      showPerson: false,
    };
  }

  render() {
    // const { count } = this.state;

    // try take person data to local state
    // const { count, person } = this.state;

    // adding conditional rendering
    const { count, person, showPerson } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Person person={{ name: 'Jake', age: 22  }} /> */}
          {/* it will same rendered Person component */}
          {/* <Person person={person} /> */}
          {/* conditional rendering */}
          {showPerson ? <Person person={person} /> : null}
          Button Count: {count}
          <button
            onClick={() => {
              this.setState({
                count: count + 1,
              });
            }}
          >
            Increase Count
          </button>
          <button
            onClick={() => {
              this.setState((prevState) => ({
                showPerson: !prevState.showPerson,
              }));
            }}
          >
            Toggle Person
          </button>
        </header>
      </div>
    );
  }
}

export default App;
