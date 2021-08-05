

import Navbar from 'react-bootstrap/Navbar';

import './Header.css';

const mystyle = {
   color: "white",
  textAlign: "center",
  
};

function Header(props) {
    return (
        <>
        <Navbar style={mystyle}>
          
            <div className ="tron">
            <h1>Employee Directory</h1>
            </div>
            
         
            </Navbar>
         
          <div className="searchbox">
            <input name="searchTerm"
                   class="form-control form-control-lg"
                   type="search"
                   placeholder="Search"
                   aria-label="Search"
                   onChange={props.handleSearchChange}
            />
          

            </div>
        
       
       
        </>
    )
}

export default Header;
