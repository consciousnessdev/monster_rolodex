import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
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
        <CardList>
          {/* passing monsters state passed as children props */}
          {
            monsters.map(({ id, name }) => (
              <h1 key={id}>{name}</h1>
            ))
          }
        </CardList>
      </div>
    );
  }
}

export default App;
