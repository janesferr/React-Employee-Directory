import React, { Component } from "react";
// import axios from 'axios';
// import ReactDOM from 'react-dom'
// import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from './components/FriendCard';
import Table from 'react-bootstrap/Table'


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
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
        id={i+1}
        name={`${u.name.first} ${u.name.last}`}
        email={u.email}
        phone={u.phone}
        image={u.picture.medium}
      />
    ));
    return (
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
    );
  }
}



export default App;

