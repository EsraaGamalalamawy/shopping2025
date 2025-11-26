import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Products from './products';

function Home() {
    return (
        <div>
            <div className='Home mb-4'>
                <Container>
                    <h6>Welcome to Our Store</h6>
                    <p>Welcome to out site! Discover a wide range of height-quality Products at competitive Price, all in one place. 
                        Enjoy a seamless shopping experience with fast delivery and exclusive deals.
                    </p>
                </Container>
            </div>
            <Products/>
        </div>
    );
}

export default Home;