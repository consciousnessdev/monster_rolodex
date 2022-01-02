import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Paman',
          id: 'wfe43',
        },
        {
          name: 'Pengen',
          id: '890j',
        },
        {
          name: 'Kamu',
          id: '23de',
        },
      ],
    };
  }

  /**
   * Lifecycle Method: suatu method yang dipanggil pada tahapan yang berbeda
   * ketika render dari ketika komponen dirender
   */

  /**
   * componentDidMount: lifecycle yang dipanggil ketika komponen dikaitkan (mount).
   * pengatian atau mounting adalah ketika react menempatkan komponen ke halaman dan
   * dirender dalam bentuk DOM pada saat pertama kali
   */

  componentDidMount() {
    // make API request
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      // users renamed to monsters then set to state monsters
      .then(monsters => this.setState({monsters}));
  }
  

  render() {
    const { monsters } = this.state;
    return (
      <div className="App">
        {monsters.map(({ id, name }) => (
          <h1 key={id}>{name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
