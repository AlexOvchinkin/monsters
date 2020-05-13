import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card.list';
import { SearchBox } from './components/search-box/search-box';


class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      searchText: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(users => users.json())
      .then(users => this.setState({ users: users }));
  }

  search = (e) => {
    this.setState({ searchText: e.target.value });
  }

  render() {
    const { users, searchText } = this.state;
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().search(searchText.toLowerCase()) === 0;
    });

    return (
      <div>
        <SearchBox handleSearch={this.search}/>
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
