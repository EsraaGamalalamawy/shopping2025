import React, { useState } from 'react';
import ProductsData from './productsData';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';

function Products() {
    const [category,setCategory]=useState("all")
    return (
            <Container className='text-center pt-3'>
                <h3>Latest Products</h3>
                <hr className='w-100' />  
                <Button variant="outline-dark" onClick={()=>setCategory("all")} className='m-2'>All</Button>
                <Button variant="outline-dark" onClick={()=>setCategory("men's clothing")} className='m-2'>Mens's Clothing</Button>
                <Button variant="outline-dark" onClick={()=>setCategory("women's clothing")} className='m-2'>Womens's Clothing</Button>
                <Button variant="outline-dark" onClick={()=>setCategory("jewelery")} className='m-2'>Jewelery</Button>
                <Button variant="outline-dark" onClick={()=>setCategory("electronics")} className='m-2'>Electronics</Button>
                <ProductsData categoryName={category}/>
            </Container>
            
    );
}

export default Products;