
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Form } from 'react-bootstrap';

const mystyle = {
   color: "white",
  textAlign: "center"

};

function Header(props) {
    return (
        <>
        <Navbar style={mystyle}>
          <Nav>
            <h1>Employee Directory</h1>
          </Nav>
          
        <div className="searchbox">
          <Form inline>
            <input name="searchTerm"
                   className="form-control mr-sm-2"
                   type="search"
                   placeholder="Search"
                   aria-label="Search"
                   onChange={props.handleSearchChange}
            />
          </Form>
        </div>
        </Navbar>
        </>
    )
}

export default Header;
