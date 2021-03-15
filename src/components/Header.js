
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import {  Nav, Form, Button} from 'react-bootstrap';
import context from 'react-bootstrap/esm/AccordionContext';


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
    
   <div className="searchbox">
     <Form inline>
       <input
       className="form-control mr-sm-2"
       type="search"
       placeholder="Search"
       aria-label="Search"
       onChange={e =>context.handleSearchChange(e)}
       />
        <Button type="submit" variant="outline-light">Search</Button> 


     </Form>
   </div>
     
    
  </Navbar>

  
</>
    )
}

export default Header;
