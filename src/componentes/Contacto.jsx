import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Verificar from "../assets/verificar.png";

const Contacto = () => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({
    nombre: '',
    email: '',
    comentario: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setShow(true); // Mostrar el modal si el formulario es válido
    }
    setValidated(true);
  };

  return (
    <>
      <Container fluid className="cont-contact" id="con">
        <Row>
          <Col>
            <div>
              <h3 className="cont-title">CONTACTO</h3>
              <hr className="hr-grey" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId="validationCustom01">
                    <FloatingLabel controlId="floatingInput" label="Nombre" className="mb-3">
                      <Form.Control
                        required
                        type="text"
                        name="nombre"
                        value={formValues.nombre}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        size="lg"
                      />
                      <Form.Control.Feedback type="invalid">
                        Por favor, ingrese su nombre.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group controlId="validationCustom02">
                    <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                      <Form.Control
                        required
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        placeholder="name@example.com"
                      />
                      <Form.Control.Feedback type="invalid">
                        Por favor, ingrese su email.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group controlId="validationCustom03">
                    <FloatingLabel controlId="floatingTextarea2" label="Comentarios" className="mb-3">
                      <Form.Control
                        required
                        as="textarea"
                        name="comentario"
                        value={formValues.comentario}
                        onChange={handleInputChange}
                        placeholder="Deje aquí su comentario"
                        style={{ height: '100px' }}
                      />
                      <Form.Control.Feedback type="invalid">
                        Por favor, ingrese su mensaje.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                  <Button type="submit">Enviar</Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal centered size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        
        <Modal.Body>
            <div> 
                <div className='Modal-flex-img'>
                    <img src={Verificar} />
                </div>
                <div className='Modal-text'>
                    <h5>¡Tu mensaje ha sido enviado con éxito!</h5>
                    <p><br></br> Agradecemos tu contacto y te responderemos lo más pronto posible.</p>
                </div>
            </div> 
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Volver al sitio
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )}

export default Contacto;