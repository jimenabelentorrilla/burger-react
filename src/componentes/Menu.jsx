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
import Frp1Modal from "../assets/frp1Modal.jpg";
import Frp2Modal from "../assets/frp2Modal.jpg";
import Frp3Modal from "../assets/frp3Modal.jpg";


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
                <Modal.Header closeButton>
                
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col sm={6} xs={12} md={6} lg={6} xl={6} xxl={6}>
                                <div className="justify-content-center">
                                    <img className="width-brg-img rounded" src={urlImg}/>
                                </div>
                                
                            </Col>
                            <Col className="flex-texto-modal" sm={6} xs={12} md={6} lg={6} xl={6} xxl={6}>
                                <div>
                                    <Modal.Title className='brg-title-modal'>{title}</Modal.Title>
                                    <div>
                                        <p className='texto-modal'>{texto}</p>
                                    </div>
                                </div>
                                
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

function Postres({ title, urlImg, texto, urlModal }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='flxbx-brg'>
                <h5 className='ice-title'>{title}</h5>
                <img onClick={handleShow}
                    className="ice-img rounded"
                    src={urlImg} />
            </div>
            <Modal fullscreen show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col className="justify-content-center" xs={6} md={6} lg={6} xl={6} xxl={6}>
                                <img className="width-ice-img rounded" src={urlModal}/>
                            </Col>
                            <Col className="flex-texto-modal" xs={6} md={6} lg={6} xl={6} xxl={6}>
                                <div>
                                    <Modal.Title className='ice-title-modal'>{title}</Modal.Title>
                                    <div>
                                        <p className='texto-modal'>{texto}</p>
                                    </div>
                                </div>
                                
                                
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

const Menu = () => {

    const burgers = [
        {
          title: "bbq sensation",
          urlImg: Burger1,
          texto: "Una explosión de sabores ahumados, carne a la parrilla, cebolla caramelizada, panceta crujiente, queso fundido y un toque de frescura con rúcula ¡Una delicia irresistible para los amantes de la BBQ!"
        },
        {
          title: "beefy pancake",
          urlImg: Burger8,
          texto: "Nuestra hamburguesa triple es una combinación perfecta de sabor y textura. Tres medallones de carne smasheados entre panes de pancake esponjosos, con capas de queso fundido ¡Una explosión de sabores en cada bocado!"
        },
        {
          title: "epic burger",
          urlImg: Burger3,
          texto: "Nuestra hamburguesa completa con pan de semillas es una experiencia gourmet en un solo bocado. Acompañado con ingredientes frescos y una selección de salsas deliciosas. ¡Una experiencia culinaria única y satisfactoria!"
        },
        {
          title: "bacon onion bomb",
          urlImg: Burger4,
          texto: "Un verdadero deleite para los amantes de los sabores intensos. Descubrí el equilibrio perfecto entre lo salado y lo dulce con nuestra hamburguesa especial. ¡Una opción que deleitará tus papilas gustativas!"
        },
        {
          title: "smookey grill",
          urlImg: Burger5,
          texto: "Te transportará a una experiencia culinaria llena de sabores intensos. ¡Una opción única para los amantes de las hamburguesas con un toque gourmet!"
        },
        {
          title: "cheesy heaven",
          urlImg: Burger7,
          texto: "Una auténtica delicia para los amantes del queso. ¡Una opción irresistible para aquellos que buscan una experiencia gourmet!"
        },
        {
          title: "deluxe",
          urlImg: Burger6,
          texto: "Una combinación de sabores cautivadores. Disfrutá de la perfecta armonía entre los sabores intensos y frescos ¡Una experiencia deliciosa que no vas a querer perderte!"
        },
        {
          title: "crunchy chicken",
          urlImg: Burger2,
          texto: "Lo que realmente eleva esta hamburguesa es nuestra deliciosa salsa estilo americana que combina ingredientes seleccionados para brindar sabores agridulces y especiales. ¡Una fiesta para tus papilas gustativas!"
        }
      ];

      const postres = [
        {
          title: "ultimate chocopop",
          urlImg: Frp1,
          urlModal: Frp1Modal,
          texto: "El regalo perfecto para satisfacer tus antojos dulces. Cada mordisco es una experiencia deliciosa que combina la frescura del helado con la riqueza y suavidad del chocolate. ¡Dejáte cautivar por esta deliciosa indulgencia!"
        },
        {
          title: "vanilla caramel",
          urlImg: Frp2,
          urlModal: Frp2Modal,
          texto: "Una verdadera delicia para los amantes de los sabores dulces. Disfrutá de nuestros conos con salsa de caramelo y dejáte llevar por esta exquisita experiencia de sabor."
        },
        {
          title: "dreamwich",
          urlImg: Frp3,
          urlModal: Frp3Modal,
          texto: "Una combinación perfecta de sabores y texturas. Sumergite en la dulzura y frescura de nuestro Sandwich de Helado de Chocolate y Vainilla. ¡Dejáte llevar por esta exquisita experiencia helada!"
        }
      ];
      

  return (
    <>
        <Container id="menu" fluid="md">
            <Row>
                <Col className='gap-bx'>
                    <h3 className="menu-title">Hamburguesas</h3>
                    <hr className="hr-grey" />
                    <div className='flex-brg'>
                        {burgers.map((burger, index) => (
                        <Burger
                            key={index}
                            title={burger.title}
                            urlImg={burger.urlImg}
                            texto={burger.texto}
                        />
                        ))}
                    </div>
                </Col>
            </Row>
            <Row >
                <Col className='gap-bx-postre'>
                <h3 className="menu-title">Postres</h3>
                <hr className="hr-grey" />
                    <div className='flex-brg'>
                    {postres.map((postre, index) => (
                        <Postres
                        key={index}
                        title={postre.title}
                        urlImg={postre.urlImg}
                        urlModal={postre.urlModal}
                        texto={postre.texto}
                        />
                    ))}
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default Menu;