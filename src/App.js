import React, { Component } from "react";
// import axios from 'axios';
// import ReactDOM from 'react-dom'
import FriendCard from './components/FriendCard'


class App extends Component {
    constructor(){
        super();
        this.state = {
          users: []
        };
      }
    
      componentWillMount() {
        fetch('https://randomuser.me/api/?results=50')
        .then(response => {
          if(response.ok) return response.json();
          throw new Error('Request failed.');
        })
        .then(data => {
          this.setState({users: data.results});
        })
        .catch(error => {
          console.log(error);
        });
      }
    
      render() {
        const list = this.state.users.map( (u, i) => {
            return <User key={u.login.md5} name={`${u.name.first} ${u.name.last}`} email={u.email} phone={u.phone} />;
        });
        return (
          <div>
            <h1>Employee Directory</h1>
            {list}
          </div>
        );
      }
    }
    
    class User extends React.Component {
      render() {
        return (
          <div>
         <div className="card">
    <div className="img-container">
            <FriendCard 
            name = {this.props.name}
            // image= {this.props.picture.large}
            phone = {this.props.phone}
            email={this.props.email}
            />
            
      {/* <img alt={this.props.name} src={this.props.picture.large} /> */}
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {this.props.name}
        </li>
        <li>
          <strong>Phone:</strong> {this.props.phone}
        </li>
        <li>
          <strong>Email:</strong> {this.props.email}
        </li>
      </ul>
    </div>
   
  </div>
          </div>
          
        );
      }
    }
    
    
export default App;

