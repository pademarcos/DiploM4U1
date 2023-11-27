
import { Fragment, useState } from 'react';
import { FormLabel, InputGroup, Row, Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) =>{
  const initialForm = {
    nombre: "",
    email: "",
    talefono: "",
    mensaje: ""
  }
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }))
  }
  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post('http://localhost:4000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false){
      setFormData(initialForm)
    }
  }

  return (
    <Fragment>
      <div className='container'>
        <div className='form-container'>
    <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} className="mb-3" controlId="nombre">
            
        <Form.Label>Nombre</Form.Label>
        <Form.Control placeholder="Nombre"  name="nombre" value={formData.nombre} onChange={handleChange}  />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="telefono">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type='tel' placeholder="Teléfono" name="telefono" value={formData.telefono} onChange={handleChange} />
      </Form.Group>
      
<FormLabel>Comentario</FormLabel>
      <InputGroup>
        <InputGroup.Text>Comentario</InputGroup.Text>
        <Form.Control as="textarea" aria-label="comentario" name="mensaje" value={formData.mensaje} onChange={handleChange}/>
      </InputGroup>
      {sending ? <p>Enviando...</p> : null}
      {msg ? <p>{msg}</p> : null}

      <Button variant="primary" type="submit" onClick={handleSubmit} className='botonenviar'>
        Enviar
      </Button>
    </Form>
    </div>
        <div className='text-container'>
          <h2>¡Contáctanos!</h2>
          <p>
          ¡Descubre el mundo a través de nuestra lente! 📸 Encuentra la magia en cada momento con nuestras cámaras fotográficas de alta calidad. ¡Ponte en contacto hoy y descubre la excelencia en cada captura!
          </p>
          <img src="https://www.siliconweek.com/wp-content/uploads/2014/03/shutterstock_124302109.jpg" alt="secretaria"  className='fotocontacto'/>
        </div>
      </div>
    </Fragment>
  );
  }

export default ContactoPage