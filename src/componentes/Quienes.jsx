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
                <p className="us-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi excepturi fugit esse aspernatur fuga officia quos quae nisi placeat iure praesentium saepe dolorem autem, quo perspiciatis, minima minus. Inventore, tempore. Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Non, exercitationem. Ex quidem sit molestias incidunt, labore vero non et a mollitia, quam suscipit quis velit reiciendis officiis voluptate. Et, atque. </p>
            </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Quienes;