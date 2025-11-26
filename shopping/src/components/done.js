import React from 'react';
import { VscPassFilled } from "react-icons/vsc";


function Done(props) {
    return (
        <div className='done justify-content-center align-items-center' style={{top:props.style}}>
            <VscPassFilled className='text-success'/>
            <p className='p-0 m-0'>Added to cart</p>
        </div>
    );
}

export default Done;