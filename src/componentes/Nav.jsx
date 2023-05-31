import React from 'react';
import Logo from "../assets/burguer (1).png";
import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.jpg";
import Carousel from 'react-bootstrap/Carousel';


function Nav () {
  return (
    <>
        <div className='nav-flex'>
            <div>
                <img src={Logo}/>
            </div>
            <div>
                <ul className='nav'>
                    <a href='#quienes'><li>Quienes somos</li></a>
                    <a href='#menu'><li>Menu</li></a>
                    <a href='#suc'><li>Sucursales</li></a>
                    <a href='#con'><li>Contacto</li></a>
                </ul>
            </div>
        </div>
        <div>
            <Carousel fade>
                <Carousel.Item interval={1400}>
                    <img
                    className="d-block w-100 car-altura"
                    src={Banner1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1400}>
                    <img
                    className="d-block w-100 car-altura"
                    src={Banner2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1400}>
                    <img
                    className="d-block w-100 car-altura"
                    src={Banner3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    </>
  )
}

export default Nav;