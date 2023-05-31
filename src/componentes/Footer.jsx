import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram , faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
        <Container fluid className="cont-footer">
            <Row>
                <Col>
                    <div className='social-flex'>
                        <div>
                            <a className="a-social" href="#"><FontAwesomeIcon className="hover-social" color= "#FFFFFF" size="2x" icon={faFacebook} /></a>
                        </div>
                        <div>
                        <a className="a-social" href="#"><FontAwesomeIcon className="hover-social" color= "#FFFFFF" size="2x" icon={faInstagram} /></a>
                        </div>
                        <div>
                        <a className="a-social" href="#"><FontAwesomeIcon className="hover-social" color= "#FFFFFF" size="2x" icon={faTwitter} /></a>
                        </div>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Footer