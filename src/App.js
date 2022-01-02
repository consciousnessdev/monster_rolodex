import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({monsters}));
  }
  

  render() {
    const { monsters } = this.state;
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monster"
          onChange={({ target }) => this.setState({ searchField: target.value })}
        />
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
