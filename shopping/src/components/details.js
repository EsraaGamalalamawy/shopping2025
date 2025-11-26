import React, { useState } from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import { FaStar } from "react-icons/fa6";
import {useDispatch ,useSelector } from 'react-redux';
import { Amount, Count, Details, ToCart } from './actions';
import { Allitems} from './states';
import Card from 'react-bootstrap/Card';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Done from './done';
import { useNavigate } from 'react-router-dom';

function DetailsPage() {
    const x=useNavigate()
    const data=useSelector((state)=>state.details.data)
    const dispatch=useDispatch()
    const allData=Allitems()
    const [addtocart,setAddtocart]=useState("-50px")
    const added=()=>{
        dispatch(Count())
        setTimeout(() => {
            setAddtocart("15px")
        }, 0);
        setTimeout(() => {
            setAddtocart("-50px")
        }, 900);            
    }
    return (
        <div className='details'>
            <Container>
                <Row className='d-flex justify-content-between' style={{paddingBottom:"100px"}}>
                    <Col md={5} xs={5}>
                        <img src={data.image} alt='item' style={{width:"100%",height:"80vh"}} />
                    </Col>
                    <Col md={6} xs={7} className='d-flex flex-column'>
                        <h3 className='text-uppercase'>{data.category}</h3>
                        <p style={{fontSize:"44px",fontWeight:"100"}}>{data.title}</p>
                        <p className='d-flex align-items-center'>{data.rating.rate}<FaStar/></p>
                        <p style={{fontSize:"40px",fontWeight:"100"}}>${data.price}</p>
                        <p style={{lineHeight: "1.7"}}>{data.description}</p>
                        <div>
                            <Button variant="outline-dark" className='m-2' onClick={()=>{
                                dispatch(ToCart(data))
                                added() 
                                dispatch(Amount("add"))
                            }}>Add to Cart</Button>
                            <Button variant="dark" onClick={()=>{x("/cart")}} >Go to Cart</Button>
                        </div>
                    </Col>
                </Row>
                <h3>You May Also Like</h3>
                    
                        {typeof(allData)==='object'? 
                        <Swiper modules={[ Pagination]}
                                spaceBetween={30}
                                slidesPerView={3.7}
                                grabCursor={true}
                                breakpoints={{
                                    0:{
                                        slidesPerView:3,
                                        spaceBetween:10,
                                    },
                                    640:{
                                        slidesPerView:3.2,
                                        spaceBetween:20,
                                    },
                                    1024:{
                                        slidesPerView:3.7,
                                        spaceBetween:30,
                                    }
                                }}
                                pagination={{ clickable: true }}
                                className='pb-5 pt-4'>
                                {allData.filter(ele=>ele.category===data.category).map((item,index)=>(
                                <SwiperSlide key={index} >
                                    <Card className='pb-2' style={{position:"relative",zIndex:"0"}}>
                                        <Card.Img variant="top" src={item.image} className='p-2' style={{height:"50vh"}} />
                                        <Card.Body className="p-0">
                                            <Card.Title style={{whiteSpace:"nowrap",overflow:'hidden',textOverflow:"ellipsis",padding:"20px 50px 10px"}}>{item.title}</Card.Title>
                                            <Row className='d-flex justify-content-center gap-2 flex-wrap'>
                                                <Button variant="dark" style={{width:"fit-content"}} onClick={()=>{
                                                                                        dispatch(Details(item))
                                                                                        x("/details")
                                                                                    }} >Buy Now</Button>
                                                <Button variant="dark" style={{width:"fit-content"}} onClick={()=>{
                                                    dispatch(ToCart(item))
                                                    added() 
                                                    dispatch(Amount("add"))
                                                }}>Add to Cart</Button>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                    
                            ))}
                        </Swiper>
                        
                        :allData===""? <h3 className='text-center'>Loading...</h3>
                        :<h3 className='text-center text-danger'>{allData}</h3>
                        }
                                    
            </Container>
            <Done style={addtocart} />
        </div>
    );
}

export default DetailsPage;