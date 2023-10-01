import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const CamaraCard = ({nombre, descripcion, imagen, precio}) => {
  return (
    <Fragment>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text>${precio}</Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default CamaraCard;
