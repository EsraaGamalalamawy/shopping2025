import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import {Col, Row} from 'react-bootstrap'
import mensClothing from "../images/mens.jpg";
import womensClothing from '../images/womens.jpg';
import jewelery from '../images/jewelery.jpg';
import electronics from '../images/electronics.jpg'

function About() {
    return (
        <div className='about'>
            <Container className='text-center p-2'>
                <h3>About Us</h3>
                <hr className='w-100' />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, natus ducimus dolorem 
                    similique optio impedit velit aliquid voluptatem officiis earum doloremque illum deleniti 
                    quam blanditiis tempora. Beatae quos enim nobis fuga? Est pariatur dignissimos at? Facere, 
                    quam. Corrupti quibusdam at velit adipisci quasi dolor minus voluptatem dicta culpa. Obcaecati 
                    neque ex accusantium cumque, veritatis nam cupiditate incidunt fugit earum unde ducimus, alias qui 
                    nostrum eius. Vitae aliquid dolor qui vel pariatur? Dolores, commodi in? Laudantium pariatur ut 
                    facilis? Sed illum, alias et reiciendis odio neque iste eius saepe accusamus necessitatibus ipsam 
                    quia totam obcaecati earum vel eaque beatae debitis exercitationem?</p>
                <h3 className='text-center pt-3'>Our Products</h3>
                <Row className='d-flex flex-wrap justify-content-between p-4' style={{rowGap:"20px"}}>
                    <Col md={3} xs={6}>
                        <Card className='h-100'>
                            <Card.Img variant="top" src={mensClothing} />
                            <Card.Body>
                                <h5>Mens's clothing</h5>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xs={6}>
                        <Card className='h-100'>
                            <Card.Img variant="top" src={womensClothing} />
                            <Card.Body>
                                <h5>Women's clothing</h5>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xs={6}>
                        <Card className='h-100'>
                            <Card.Img variant="top" src={jewelery} />
                            <Card.Body>
                                <h5>jewelery</h5>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xs={6}>
                        <Card className='h-100'>
                            <Card.Img variant="top" src={electronics} />
                            <Card.Body>
                                <h5>Elactronics</h5>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;