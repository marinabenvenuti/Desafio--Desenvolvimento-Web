import React from 'react';
import "./Header.css";
import Nav from 'react-bootstrap/Nav';

const Header = (props) => {
    return (
      <div className="row g-0 rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative header">
        <div className="col p-4 d-flex flex-column position-static">
          <h2>{props.title}</h2>
          <Nav className="justify-content-center" activeKey="#">
            <Nav.Item>
              <Nav.Link href="/home">{props.link}</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="col-auto">
        </div>
      </div>
    );
  };
  
  export default Header;