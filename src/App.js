
import FriendCard from './components/FriendCard';
import Table from 'react-bootstrap/Table'
import React, { Component } from "react";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [], search: "", alphabetical: 'az' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    
    fetch('https://randomuser.me/api/?results=50')
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Request failed.');
      })
      .then(data => {
        this.setState({ users: data.results });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderDirectoryList() {
    let users;
    if (this.state.searchTerm && this.state.searchTerm.trim() !== '') {
      users = this.state.users.filter( u => { 
        let name = `${u.name.first} ${u.name.last}`;
        return name.startsWith(this.state.searchTerm.trim())
      });
    }
    else {
      users = this.state.users;
    }

    if (this.state.alphabetical === "az") {
      users.sort((a, b) => {
        if (a.name.first === b.name.first)
          return 0;
        return a.name.first < b.name.first ? -1 : 1
      });
    } else {
      users.sort((a, b) => {
        if (a.name.first === b.name.first)
          return 0;
        return a.name.first < b.name.first ? 1 : -1
      });
    }

    let list = users.map((u, i) => (
      <FriendCard
        key={u.login.md5}
        id={i + 1}
        name={`${u.name.first} ${u.name.last}`}
        email={u.email}
        phone={u.phone}
        image={u.picture.medium}
      />
    ));

    return list;
  }

  render() {
    let list = this.renderDirectoryList();
    return (
      <div>
        <Header handleSearchChange={this.handleSearchChange} />
        <div>
          <Table striped bordered hover variant="light" >
            <thead>
              <tr>
                <th>#</th>
                <th> Name <select
                  name="alphabetical"
                  value={this.state.alphabetical}
                  onChange={this.handleChange}
                >
                  <option value="az" defaultValue>A to Z</option>
                  <option value="za">Z to A</option>
                </select>
                </th>
                <th>Email</th>
                <th>Phone</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {list}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }

  handleSearchChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }
}

export default App;
