import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Burger1 from "../assets/burguer1.jpg";
import Burger2 from "../assets/burguer2.jpg";
import Burger3 from "../assets/burguer3.jpg";
import Burger4 from "../assets/burguer4.jpg";
import Frp1 from "../assets/frp1.jpg";
import Frp2 from "../assets/frp2.jpg";
import Frp3 from "../assets/frp3.jpg";


function Burger({ title, urlImg }) {
    return (
        <>
            <div className='flxbx-brg'>
                <h5 className='brg-title'> {title} </h5>
                <img
                    className="brg-img size-brg rounded"
                    src={urlImg} />
            </div>
        </>
    );
}

function Postres({ title, urlImg }) {
    return (
        <>
            <div className='flxbx-brg'>
                <h5 className='ice-title'> {title} </h5>
                <img
                    className="ice-img rounded"
                    src={urlImg} />
            </div>
        </>
    );
}


const Menu = () => {
  return (
    <>
        <Container id="menu" fluid="md">
            <Row>
                <Col className='gap-bx'>
                    <h3 className="menu-title">Hamburguesas</h3>
                    <div className='flex-brg'>
                        <Burger 
                        title="lorem"
                        urlImg={Burger1}
                        />
                        <Burger 
                        title="lorem"
                        urlImg={Burger2}
                        />
                        <Burger 
                        title="lorem"
                        urlImg={Burger3}
                        />
                        <Burger 
                        title="lorem"
                        urlImg={Burger4}
                        />
                        <Burger 
                        title="lorem"
                        urlImg={Burger1}
                        />
                        <Burger 
                        title="lorem"
                        urlImg={Burger2}
                        />
                        <Burger 
                        title="lorem"
                        urlImg={Burger3}
                        />
                        <Burger 
                        title="lorem"
                        urlImg={Burger4}
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='gap-bx'>
                <h3 className="menu-title">Postres</h3>
                    <div className='flex-brg'>
                        <Postres 
                        title="lorem"
                        urlImg={Frp1}/>
                        <Postres 
                        title="lorem"
                        urlImg={Frp2}/>
                        <Postres 
                        title="lorem"
                        urlImg={Frp3}/>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default Menu