import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgWho from "../assets/us.jpg";

const Quienes = () => {
  return (
    <>
    <Container id="quienes">
      <Row xs={1} md={2} className="who-flex">
        <Col>
            <div>
                <img className="img-who" src={ImgWho} />
            </div>
        </Col>
        <Col>
            <div>
                <h1 className="us-title">QUIENES SOMOS</h1>
                <hr className="hr-grey" />
                <p className="us-p">En Gourmet Burger Kitchen, creemos en el poder de la comida para unir a las personas, y nuestras hamburguesas están hechas con amor y pasión. Nos comprometemos a superar las expectativas de nuestros clientes y convertir cada visita en un festín delicioso. <br />¡Únete a nosotros en esta deliciosa aventura y descubre por qué somos la elección favorita de los amantes de las hamburguesas en la ciudad!
 </p>
            </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Quienes;