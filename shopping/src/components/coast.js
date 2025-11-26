import { Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Coast(props) {
    const x=useNavigate()
    const sum=()=>{
        return Math.round(props.Allitems.reduce((curr,item,index)=>{return (curr + (+item.price *props.amount[index]))},0))
    }
    return (
        <div>
            <h5  className='bg-light p-3 m-0 border-bottom border-2 fw-bold'>Order Summary</h5>
            <div className='p-3'>
                <div className='d-flex justify-content-between'>
                    <p className='w-fit-content'>products({
                        props.amount.length>0? props.amount.reduce((ele,curr)=>{return ele+curr}):0
                        })</p>
                    <span>${props.Allitems===0? 0
                    : sum()
                    }</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className='w-fit-content'>Shipping</p>
                    <span>$30</span>
                </div>
                <p className='d-flex justify-content-between fw-bold'>
                <p className='w-fit-content'>Total amount</p>
                    <span>${30*sum()}</span>
                </p>
            </div>
            <Button variant="dark" className='mb-3 text-center p-3' style={{width:"94%",marginLeft:"3%",display:props.display}} onClick={()=>{x("/checkout")}} >Go to checkout</Button>
        </div>
    );
}

export default Coast;