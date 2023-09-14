import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock , faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

function Info({ title, icon, info, customStyle }) {
    return (
        <>
            <div className='inf752'>
                <div>
                    <FontAwesomeIcon color= "#D1D1D1" size="3x" icon={icon} style={customStyle} />
                </div>
                <div>
                    <h5 className='subtitle'> {title} </h5>
                    <p className="par-info">{info}</p>
                </div>
            </div>
        </>
    );
}

function Sucu () {
    
    const [direccion, setDireccion] = useState("Av. Maipú 2814, Provincia de Buenos Aires");

    const [mapa, setMapa] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.732151209738!2d-58.4941821254111!3d-34.50967415253572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb13dfde47817%3A0xc0ab712853472ca0!2sAv.%20Maip%C3%BA%202814%2C%20B1636AAV%20Olivos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1685482096474!5m2!1ses-419!2sar")

    const direcciones = [
        {
          nombre: 'Olivos',
          direccion: 'Av. Maipú 2814, Olivos, PBA',
          mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.732151209738!2d-58.4941821254111!3d-34.50967415253572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb13dfde47817%3A0xc0ab712853472ca0!2sAv.%20Maip%C3%BA%202814%2C%20B1636AAV%20Olivos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1685482096474!5m2!1ses-419!2sar',
        },
        {
          nombre: 'San Miguel',
          direccion: 'Sgto Cabral 1052, Muñiz, PBA',
          mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.335416250813!2d-58.708060088693024!3d-34.54506197286265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd0f2c0f4aeb%3A0x489f5cfd06b20d41!2sSgto%20Cabral%201052%2C%20B1663OLV%20San%20Miguel%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1685507433824!5m2!1ses-419!2sar',
        },
        {
          nombre: 'Belgrano',
          direccion: 'Arribeños 2000, Belgrano, CABA',
          mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.8243182133806!2d-58.452848788692364!3d-34.55800327285801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5cd4b9be5a7%3A0xf8a523281733e777!2sArribe%C3%B1os%202000%2C%20C1428%20CABA!5e0!3m2!1ses-419!2sar!4v1685507597826!5m2!1ses-419!2sar',
        },
      ];

      const handleDireccion = (index) => {
        setDireccion(direcciones[index].direccion);
        setMapa(direcciones[index].mapa);
      };

  return (
    <>
        <Container className="cont-suc" id="suc">
            <Row>
                <Col xs={12} md={12} lg={12} xl={12} xxl={12}>
                    <div>
                        <h3 className="suc-title">SUCURSALES</h3>
                        <hr className="hr-grey" />
                    </div>
                </Col>
            </Row>
            <Row className="suc-flex">
                <Col xs={12} md={12} lg={12} xl={12} xxl={8}>
                    <div className="flx-cnt">
                        <div className='flex-1545'>
                        {direcciones.map((dir, index) => (
                            <div key={index}>
                                <p className='suc-dir' onClick={() => handleDireccion(index)}>
                                sucursal {dir.nombre}
                                </p>
                            </div>
                        ))}
                        </div>
                        <div>
                            <iframe  src={mapa} width="700" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>           
                        </div>
                        
                    </div>
                </Col>
                <Col xs={12} md={12} lg={12} xl={12} xxl={4} className='info-flex1406 flx-cnt'>
                    <div>
                        <div className="info-flex">
                            <Info 
                            title="horario"
                            icon={faClock}
                            info="Martes a Domingo de 7PM a 11:30PM"
                            />
                            <Info 
                            title="direccion"
                            icon={faLocationDot}
                            info={direccion}
                            customStyle={{ padding: '0px 10px' }}
                            />
                            <Info 
                            title="servicio a domicilio"
                            icon={faPhone}
                            info="TEL. +54 11 9999-9999"
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Sucu;