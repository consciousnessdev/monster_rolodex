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

  render() {
    const { monsters } = this.state;
    return (
      <div className="App">
        {monsters.map(({ id, name }) => (
          <h1 key={id}>{name}</h1>
        ))}
        {/**
         * Keys Pada penggunaan Map:
         * Keys membantu react untuk mengidentifikasi item mana yang berubah,
         * ditambahkan, atau dihapus.
         * Read More: https://reactjs.org/docs/lists-and-keys.html#keys
         */}
      </div>
    );
  }
}

export default App;
