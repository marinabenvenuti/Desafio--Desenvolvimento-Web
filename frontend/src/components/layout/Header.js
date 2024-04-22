import React from 'react';
import "./Header.css";


const Header = (props) => {
  return (
      <div className="row g-0 rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative header">
        <div className="col p-4 d-flex flex-column position-static">
          <h2>{props.title}</h2>
        </div>
        <div className="col-auto">
        </div>
      </div>
    );

  };
  
  export default Header;