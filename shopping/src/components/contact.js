// import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import {Col} from 'react-bootstrap'
// import { NavLink } from 'react-router-dom';
function Contact() {
    return (
        <div className='form'>
            <Container className='text-center p-2'>
                <h3>Contact Us</h3>
                <hr className='w-100' />
                <from className='d-flex flex-column align-items-center'>
                    <Col lg={4} xs={11} className='d-flex flex-column'>
                        <label className='align-self-start'>Name</label>
                        <input type='text' placeholder='Enter Your Name'/>
                        <label className='align-self-start'>Email</label>
                        <input type='email' placeholder='name@example.com'/>
                        <label className='align-self-start'>Message</label>
                        <textarea placeholder='Enter your Message' ></textarea>
                        <input type='submit' value="Send" className='align-self-center'/>
                    </Col>
                </from>
            </Container>
        </div>
    );
}

export default Contact;