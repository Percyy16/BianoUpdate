import React, { useState, useEffect } from 'react';

import { images } from '../../constants';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { urlFor, client } from '../../client';

import './Mainbar.scss';

const Mainbar = () => {

    const [furniture, setFurniture] = useState([]);
    const [mainbaritem, setMainbaritem] = useState([]);

    useEffect(() => {
        const query = '*[_type == "furniture"]';

        client.fetch(query).then((data) => {
            setFurniture(data);
        });
    }, []);

    useEffect(() => {
        const query = '*[_type == "mainbaritem"]';

        client.fetch(query).then((data) => {
            setMainbaritem(data);
        });
    }, []);

    return (
        <div className='bia__content'>
            <h1 className='bia__headtext'>Nábytek</h1>
            <div className='bia__content-menu'>
                {mainbaritem.map((mainbaritem, index) => (
                    <a className='bia__content-menu-wrap' key={mainbaritem.name + index}>
                        <img src={urlFor(mainbaritem.imgUrl)} alt={mainbaritem.name} />
                        <p>{mainbaritem.name}</p>
                    </a>
                ))}
            </div>
            <Container className="bia__container">
                <Row>
                    {furniture.map((furniture, index) => (
                        <Col xs={6} md={4} className="bia__row-box" key={furniture.name + index}>
                            <img src={urlFor(furniture.imgUrl)} alt={furniture.title} />
                            <h1>{furniture.skladem}</h1>
                            <p>{furniture.name}</p>
                            <p className='bia__row-box-price'>{furniture.cena}</p>
                            <button>+ Do studia</button>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    )
}

export default Mainbar