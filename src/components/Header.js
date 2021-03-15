import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import {  Nav, Form, Button, FormControl } from 'react-bootstrap';
// import Search from 'react-search';

const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  textAlign: 'center',
};

 function Header() {
    return (
        <>
  
 
  <Navbar bg="primary" variant="dark">
    <Nav className="mr-auto">
      <h1 style={mystyle}>Employee Directory</h1>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
   
      {/* <Search items={items} />
 
        <Search items={items}
                placeholder=''
                maxSelected={3}
                multiple={true}
                onItemsChanged={this.HiItems.bind(this)} /> */}
    </Form>
  </Navbar>

  
</>
    )
}

export default Header;
