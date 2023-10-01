import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

const Header = (props) => {
  return (
    <Fragment>
    
      <header className="header">
        <h1>TechTrend</h1>
        <h5>Lorem ipsum dolor sit amet.</h5>
      </header>
      <Button onClick={props.onAdd}>Prueba</Button>
    
    </Fragment>
  );
};
export default Header;
