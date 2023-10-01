
import { Fragment } from 'react';
import { FormLabel, InputGroup, Row, Form, Button, Col } from 'react-bootstrap';

function Contacto() {
  return (
    <Fragment>
      <div className='container'>
        
        
        <div className='row col-md-5'>
    <Form>
        <Form.Group as={Col} className="mb-3" controlId="nombre">
            
        <Form.Label>Nombre</Form.Label>
        <Form.Control placeholder="Nombre" />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
      </Row>

      

      <Form.Group className="mb-3" controlId="telefono">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control placeholder="Teléfono" />
      </Form.Group>
      
<FormLabel>Mensaje</FormLabel>
      <InputGroup>
      
        <InputGroup.Text>Mensaje</InputGroup.Text>
        <Form.Control as="textarea" aria-label="Mensaje" />
      </InputGroup>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
    </Fragment>
  );
}

export default Contacto;