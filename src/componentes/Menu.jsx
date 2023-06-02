import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
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

function Burger({ title, urlImg, texto }) { 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='flxbx-brg'>
                <h5 className='brg-title'>{title}</h5>
                <img onClick={handleShow}
                    className="brg-img size-brg rounded"
                    src={urlImg} />
            </div>
            <Modal fullscreen show={show} onHide={handleClose}>
                <Modal.Header className="align-text" closeButton>
                <Modal.Title className='brg-title'>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={12} md={8} lg={4}>
                                <img className="width-brg-img rounded" src={urlImg}/>
                            </Col>
                            <Col className="flex-texto-modal" xs={6} md={4} lg={8}>
                                <div>
                                    <p className='texto-modal'>{texto}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

function Postres({ title, urlImg, texto }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='flxbx-brg'>
                <h5 className='ice-title'> {title} </h5>
                <img onClick={handleShow}
                    className="ice-img rounded"
                    src={urlImg} />
            </div>
            <Modal fullscreen show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title className='ice-title'>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={12} md={8}>
                                <img className="width-ice-img" src={urlImg}/>
                            </Col>
                            <Col xs={6} md={4}>
                            <p>{texto}</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
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
                        texto="Una explosión de sabores ahumados, jugosa carne a la parrilla, cebolla caramelizada, panceta crujiente, queso fundido y un toque de frescura con rúcula ¡Una delicia irresistible para los amantes de la BBQ!" />
                        <Burger 
                        title="beefy pancake"
                        urlImg={Burger8}
                        texto="Nuestra hamburguesa triple es una combinación perfecta de sabor y textura. Tres jugosos medallones de carne smasheados entre panes de pancake esponjosos, con capas de queso fundido ¡Una explosión de sabores en cada bocado!
                        " />
                        <Burger 
                        title="epic burger"
                        urlImg={Burger3}
                        texto="Nuestra hamburguesa completa con pan de semillas es una experiencia gourmet en un solo bocado. Con un generoso medallón de carne cuidadosamente sazonado, con un esponjoso pan de semillas crujientes. Acompañado con ingredientes frescos y una selección de salsas deliciosas. ¡Una experiencia culinaria única y satisfactoria!
                        " />
                        <Burger 
                        title="bacon onion bomb"
                        urlImg={Burger4}
                        texto="Un verdadero deleite para los amantes de los sabores intensos. Se combina el crujiente bacon y cebolla caramelizada para crear una explosión de sabores irresistibles. Descubre el equilibrio perfecto entre lo salado y lo dulce con nuestra hamburguesa especial de bacon y cebolla caramelizada ¡Una opción que deleitará tus papilas gustativas!
                        " />
                        <Burger 
                        title="smookey grill"
                        urlImg={Burger5}
                        texto="Te transportará a una experiencia culinaria llena de sabores intensos. Un medallón de carne con un delicioso toque ahumado, se combina con la frescura crujiente de la lechuga morada y la intensidad de los tomates secos. ¡Una opción única para los amantes de las hamburguesas con un toque gourmet!" />
                        <Burger 
                        title="cheesy heaven"
                        urlImg={Burger7}
                        texto="Una auténtica delicia para los amantes del queso. Presentamos un suculento medallón grande de carne jugosa, acompañado por una generosa porción de dos tipos de queso derretido, que le brindan una explosion de sabor cremoso. ¡Una opción irresistible para aquellos que buscan una experiencia gourmet con mucho queso!
                        " />
                        <Burger 
                        title="deluxe"
                        urlImg={Burger6}
                        texto="Una combinación de sabores cautivadores. Añadimos un toque de frescura con la rúcula, que aporta un sabor ligeramente picante y refrescante. Para un toque adicional de dulzura y color incorporamos cebolla morada caramelizada. Disfruta de la perfecta armonía entre los sabores intensos y frescos ¡Una experiencia deliciosa que no querrás perderte!
                        " />
                        <Burger 
                        title="crunchy chicken"
                        urlImg={Burger2}
                        texto="Una verdadera explosion de sabores. Agregamos la frescura y el toque crujiente del pepinillo, junto con el sabor único de la ciboulette. Pero lo que realmente eleva esta hamburguesa es nuestra deliciosa salsa estilo americana que combina ingredientes seleccionados para brindar una mezcla irresistible de sabores agridulces y especiales. ¡Una verdadera fiesta para tus papilas gustativas!" />
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
                        urlImg={Frp1}
                        texto="El regalo perfecto para satisfacer tus antojos dulces. Cada mordisco es una experiencia deliciosa que combina la frescura del helado con la riqueza y suavidad del chocolate. Disfruta de nuestras paletas y déjate cautivar por esta deliciosa indulgencia. " />
                        <Postres 
                        title="vanilla caramel"
                        urlImg={Frp2}
                        texto="Una verdadera delicia para los amantes de los sabores dulces. Disfruta de nuestros conos con salsa de caramelo y déjate llevar por esta exquisita experiencia de sabor."/>
                        <Postres 
                        title="dreamwich"
                        urlImg={Frp3}
                        texto="Una combinación perfecta de sabores y texturas. Sumérgete en la dulzura y frescura de nuestro Sandwich de Helado de Chocolate y Vainilla, y déjate llevar por esta exquisita experiencia helada.
                        " />
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default Menu;