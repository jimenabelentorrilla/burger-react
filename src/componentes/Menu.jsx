import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Burger1 from "../assets/burger1.jpg";
import Burger2 from "../assets/burger2.jpg";
import Burger3 from "../assets/burger3.jpg";
import Burger4 from "../assets/burger4.jpg";
import Burger5 from "../assets/burger5.jpg";
import Burger6 from "../assets/burger6.jpg";
import Burger7 from "../assets/burger7.jpg";
import Burger8 from "../assets/burger8.jpg";


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
                    <hr className="hr-grey" />
                    <div className='flex-brg'>
                        <Burger 
                        title="bbq sensation"
                        urlImg={Burger1}
                        />
                        <Burger 
                        title="beefy pancake"
                        urlImg={Burger8}
                        />
                        <Burger 
                        title="epic burger"
                        urlImg={Burger3}
                        />
                        <Burger 
                        title="bacon onion bomb"
                        urlImg={Burger4}
                        />
                        <Burger 
                        title="smookey grill"
                        urlImg={Burger5}
                        />
                        <Burger 
                        title="cheesy heaven"
                        urlImg={Burger7}
                        />
                        <Burger 
                        title="deluxe"
                        urlImg={Burger6}
                        />
                        <Burger 
                        title="crunchy chicken"
                        urlImg={Burger2}
                        />
                    </div>
                </Col>
            </Row>
            <Row >
                <Col className='gap-bx-postre'>
                <h3 className="menu-title">Postres</h3>
                <hr className="hr-grey" />
                    <div className='flex-brg'>
                        <Postres 
                        title="ultimate chocopop"
                        urlImg={Frp1}/>
                        <Postres 
                        title="vanilla caramel"
                        urlImg={Frp2}/>
                        <Postres 
                        title="dreamwich"
                        urlImg={Frp3}/>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default Menu;