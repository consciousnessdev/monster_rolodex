import React from 'react'
import logo from './logo.svg';
import './App.css';
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      string: 'Hello Yihua Zhang'
    }
  }

  /**
   * Note: React Lifecycle come from "Component" of React
   * ex: componentDidMount, componentDidUpdate, componentWillUnmount etc
   */

  /**
   * SPA: Single Page Application
   * - Than request a page, SPA request a Data
   * - can access multiple API or 3rd Party API
   * - each component can show data for own whick want display
   */

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
