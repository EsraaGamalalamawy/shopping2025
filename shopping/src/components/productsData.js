import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Amount, Count, Details, ToCart } from './actions';
import {useNavigate} from 'react-router-dom'
import { Allitems} from './states';
import Done from './done';
import { useState } from 'react';
function ProductsData(props) {
    const category=props.categoryName
    const allData=Allitems()
    const dispatch=useDispatch()
    const x=useNavigate()
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
    return(
        <div className='products'>
            <div>
                <Row className='d-flex flex-wrap p-4' style={{rowGap:"20px"}}>
                {typeof(allData)==='object'?  allData.filter(ele=>ele.category===category||category==="all").map(item=>(
                        <Col md={4} xs={6}>
                            <Card className='p-0 pb-2' style={{position:"relative",zIndex:"0"}}>
                                <Card.Img variant="top" src={item.image} className='p-2' style={{height:"50vh"}} />
                                <Card.Body className="p-0">
                                    <Card.Title style={{whiteSpace:"nowrap",overflow:'hidden',textOverflow:"ellipsis",padding:"20px 50px 10px"}}>{item.title}</Card.Title>
                                    <Card.Text className='text'>{item.description}</Card.Text>
                                    <hr/>
                                    <p>${item.price}</p>
                                    <hr/>
                                    <Button variant="dark" className='m-2' onClick={()=>{
                                        dispatch(Details(item))
                                        x("/details")
                                    }} >Buy Now</Button>
                                    <Button variant="dark" onClick={()=>{
                                        dispatch(ToCart(item))
                                        added()
                                        dispatch(Amount("add"))
                                    }}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                ))
                :allData===""? <h3 className='text-center'>Loading...</h3>
                :<h3 className='text-center text-danger'>{allData}</h3>
                }
                </Row>
                <Done style={addtocart}/>
            </div>
        </div>
    )
}

export default ProductsData;
