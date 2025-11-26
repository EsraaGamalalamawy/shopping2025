import React, { useState } from 'react';
import { Col, Container, Button } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import Coast from './coast';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Amount } from './actions';

function Cart() {
    const dispatch=useDispatch()
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const Allitems=useSelector(state=>state.tocart.data)
    const amount=useSelector(state=>state.amount.data)
    console.log(amount)
    return (
        <Container className='d-flex justify-content-between p-4 gap-4'>
            <Col lg={8} md={10} className='bg-dangar border border-2 rounded-2' >
                <h5  className='bg-light p-3  m-0 border-bottom border-2 fw-bold'>items list</h5>
                <div style={{overflowY:"scroll",maxHeight:"80vh"}}>
                    { Allitems.length===0? <h3 className='text-center mt-4'>No Items</h3>
                    :Allitems.map((item,index)=>{
                        return <div>
                            <div className='d-flex justify-content-between p-3'>
                                    <img style={{width:"20%",height:"100px"}} src={item.image} alt='item' />
                                    <p className='fw-bold w-40'style={{width:"40%"}}>{item.title}</p>
                                    <div style={{width:"30%"}} className='pe-3' >
                                        <div className='d-flex justify-content-between '>
                                            <h3 style={{cursor:"pointer"}} onClick={()=>dispatch(Amount("minus",index))}>-</h3>
                                            <span>{amount[index]}</span>
                                            <h3 style={{cursor:"pointer"}} onClick={()=>dispatch(Amount("plus",index))}>+</h3>
                                        </div>
                                        <p className="text-center p-3">{amount[index]} <span className='fw-bold'>x ${item.price}</span></p>
                                    </div>
                                </div>
                                <hr className='m-3'/>
                        </div>
                    })
                }
                </div>
            </Col>
            <Col lg={4} className='border border-2 rounded-2 d-none d-lg-block' style={{height:"fit-content"}}>
                <Coast Allitems={Allitems} amount={amount} display="block"/>
            </Col>
            <Col xl={2} className='border border-2 rounded-2 d-lg-none' style={{height:"fit-content"}}>
                       <Button variant="dark" onClick={handleShow} className=" " style={{height:"fit-content"}} >Order Summary</Button>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Order Summary</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Coast Allitems={Allitems} amount={amount} display="block"/>
                </Offcanvas.Body>
            </Offcanvas> 
            </Col> 
            
        </Container>
    );
}

export default Cart;