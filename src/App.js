import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    // bind handleChange event version
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({monsters}));
  }
  
  // refactor to new handleChange function
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }

  // arrow function version
  // note: on first js call constructor it will check arrow function 
  // and set 'this' context of setState to App component context

  handleChange = (e) => {
    this.setState({ searchField: e.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonstes = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search monster"
          // set handleChange as handleChange binded to constructor
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonstes} />
      </div>
    );
  }
}

export default App;
