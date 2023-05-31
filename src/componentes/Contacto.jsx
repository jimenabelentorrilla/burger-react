import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contacto = () => {
  return (
    <>
        <Container className="cont-contact" id="con">
            <Row>
                <Col>
                    <div className='fr123'>
                        <div>
                            <h3 className="cont-title">CONTACTO</h3>
                        </div>

                        <div>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nombre"
                                className="mb-3">
                                <Form.Control type="input" placeholder="John Doe" size="lg"/>
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email"
                                className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel 
                            controlId="floatingTextarea2" 
                            label="Comments"
                            className="mb-3">
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <Button type="submit">Enviar</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Contacto