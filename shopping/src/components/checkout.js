import React, { useState } from 'react';
import { Col, Container, Button } from 'react-bootstrap';
import Coast from './coast';
import { useSelector } from 'react-redux';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Checkout(props) {
    const Allitems=useSelector(state=>state.tocart.data)
    const amount=useSelector(state=>state.amount.data)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <div className='cheackout'>
          <Container className='d-flex justify-content-between p-4 gap-4'>
            <Col md={8} xs={10} className='bg-dangar border border-2 rounded-2' >
              <h5  className='bg-light p-3  m-0 border-bottom border-2 fw-bold'>Billing address</h5>
              <form className='d-flex flex-wrap justify-content-between p-3'>
                <div className="d-flex flex-column" style={{width:"49%"}}>
                  <label>First name</label>
                  <input type='text'/>
                </div>
                <div className="d-flex flex-column " style={{width:"49%"}}>
                  <label>Last name</label>
                  <input type='text'/>
                </div>
                <div className='w-100 d-flex flex-column'>
                  <label>Email</label>
                  <input type='email' placeholder='You@Example.com'/>
                </div>
                <div className='w-100 d-flex flex-column'>
                  <label>Address</label>
                  <input type='text' placeholder='1234 Main st'/>
                </div>
                <div className='w-100 d-flex flex-column'>
                  <label>Address 2(Optional)</label>
                  <input type='text' placeholder='Appartment or Suite'/>
                </div>
                <div className="d-flex flex-column " style={{width:"40%"}}>
                  <label>Country</label>
                  <select>
                    <option>Choose...</option>
                  </select>
                </div>
                <div className="d-flex flex-column " style={{width:"30%"}}>
                  <label>State</label>
                  <select>
                    <option>Choose...</option>
                  </select>
                </div>
                <div className="d-flex flex-column " style={{width:"25%"}}>
                  <label>Zip</label>
                  <input/>
                </div>
                <hr className='w-100'/>
                <h2 className='w-100' style={{padding:"15px 0"}}>Payment</h2>
                 <div className="d-flex flex-column" style={{width:"49%"}}>
                  <label>Name on card</label>
                  <input type='text' className='mb-0'/>
                  <p>Full name as displayed on card</p>
                </div>
                <div className="d-flex flex-column " style={{width:"49%"}}>
                  <label>Credit card number</label>
                  <input type='text'/>
                </div>
                <div className='d-flex gap-3 w-50 justify-content-between'>
                  <div className="d-flex flex-column " style={{width:"49%"}}>
                    <label>Expiration</label>
                    <input/>
                  </div>
                  <div className="d-flex flex-column " style={{width:"49%"}}>
                    <label>CVV</label>
                    <input/>
                  </div>
                </div>
                <hr className='w-100'/>
                <Button variant="primary" className='w-100 p-2 m-2'>Continue to checkout</Button>
              </form>
            </Col>
            <Col md={4} className='border border-2 rounded-2 d-none d-lg-block' style={{height:"fit-content"}}>
                  <Coast Allitems={Allitems} amount={amount} display="none"/>
              </Col>
              <Col xl={2} className='border border-2 rounded-2 d-lg-none' style={{height:"fit-content"}}>
                        <Button variant="dark" onClick={handleShow} className=" " style={{height:"fit-content"}} >Order Summary</Button>
              <Offcanvas show={show} onHide={handleClose} placement='end'>
                  <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Order Summary</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                      <Coast Allitems={Allitems} amount={amount} display="none"/>
                  </Offcanvas.Body>
              </Offcanvas> 
            </Col> 
            </Container>  
        </div>
    );
}

export default Checkout;