import Container from 'react-bootstrap/esm/Container';
import {Col} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
function Login() {
    return (
        <div className='form'>
            <Container className='text-center p-2'>
                <h3>Login</h3>
                <hr className='w-100' />
                <from className='d-flex flex-column align-items-center'>
                    <Col lg={4}xs={11} className='d-flex flex-column'>
                        <label className='align-self-start'>Email address</label>
                        <input type='email' placeholder='name@example.com'/>
                        <label className='align-self-start'>Password</label>
                        <input type='password' placeholder='password'/>
                        <label className='align-self-start'>New Here? <NavLink to="/register"> Register </NavLink></label>
                        <input type='submit' value="login" className='align-self-center'/>
                    </Col>
                </from>
            </Container>
        </div>
    );
}

export default Login;