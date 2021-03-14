import Title from "./components/Title";
import FriendCard from './components/FriendCard';
import Table from 'react-bootstrap/Table'
import React, { Component } from "react";
// import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [], searchTerm: '', alphabetical: 'az' };

    this.handleChange = this.handleChange.bind(this);
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

  render() {

    const list = this.state.users.map((u, i) => (
      <FriendCard
        key={u.login.md5}
        id={i + 1}
        name={`${u.name.first} ${u.name.last}`}
        email={u.email}
        phone={u.phone}
        image={u.picture.medium}
      />
    ));
    let sortedUsers;

    if (this.state.alphabetical === "az") {
      console.log("sort");
      sortedUsers = this.state.users.sort((a, b) =>
        a.name.first < b.name.first ? 1 : -1
      );
    } else {
      sortedUsers = this.state.users.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      
      );
    }

    let filteredUsers = sortedUsers;

    if (this.state.searchTerm)
      filteredUsers = this.state.users.filter(u =>
        u.name.first.startsWith(this.state.searchTerm)
      );

    const userNames = filteredUsers.map((u, i) => {
      return <div key={u.login.md5} id={i + 1} name={`${u.name.first} ${u.name.last}`}
        email={u.email}
        phone={u.phone}
        image={u.picture.medium} />;
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search for user:
            <input
              type="text"
              name="searchTerm"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <select
          name="alphabetical"
          value={this.state.alphabetical}
          onChange={this.handleChange}
        >
          <option selected value="az">
            A to Z
          </option>
          <option value="za">Z to A</option>
        </select>
        <div>
          <Title> Employee Directory</Title>
          <Table striped bordered hover variant="light" >
            <thead>
              <tr>
                <th>#</th>
                <th> Name </th>
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

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

}




export default App;



