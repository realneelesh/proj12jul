import { Input, Button } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Auth(props) {

    const [type, setType] = useState('signup');    // state variable to store the type of form

    return (
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100vw',
            background: 'url(https://images.pexels.com/photos/6990558/pexels-photo-990558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            backgroundRepeat: 'no-repeat',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '60vh',
                width: '50vw',
                backgroundColor: '#F2F2F2',
                borderRadius: '10px'
            }}>
                {
                    type === 'login' ? <div align="left">
                        <h2>Login</h2>
                        <Input type="text" placeholder="Enter your email" />
                        <br />
                        <br />
                        <Input type="password" placeholder="Enter your password" />
                        <br />
                        <br />
                        <div>
                        <Link to="/" style={{textDecoration: 'none'}} onClick={()=>{
                            localStorage.setItem('user', 'consumer');
                            window.location.reload();
                        }}> <Button type="primary">Login</Button> </Link>
                        &nbsp; &nbsp;
                        <Link to="/admin" style={{textDecoration: 'none'}}
                        onClick={()=>{
                            localStorage.setItem('user', 'admin');
                            window.location.reload();
                        }}> <Button type="ghost">Login as Admin</Button> </Link>
                        </div>
                        <br />
                        <br />
                        <p>Don't have an account? <span onClick={() => setType('signup')} style={{ color: 'blue', cursor: 'pointer' }}>Signup</span></p>
                        </div> : null
                }

                {
                    type === 'signup' ? <div align="left">
                        <h2>Signup</h2>
                        <Input type="text" placeholder="First name" />
                        <br />
                        <br />
                        <Input type="text" placeholder="Last name" />
                        <br />
                        <br />
                        <Input type="text" placeholder="Enter your email" />
                        <br />
                        <br />
                        <Input type="password" placeholder="Enter your password" />
                        <br />
                        <br />
                        <Button type="primary" onClick={() => setType('login')} >Sign up</Button>
                        <br />
                        <br />
                        <p>Already have an account? <span onClick={() => setType('login')} style={{ color: 'blue', cursor: 'pointer' }}>Login</span></p>
                        </div> : null
                }
                {
                    type === 'admin' ? <div align="left">
                        <h2>Admin login</h2>
                        <Input type="text" placeholder="Enter your email" />
                        <br />
                        <br />
                        <Input type="password" placeholder="Enter your password" />
                        <br />
                        <br />
                        <Link to="/admin"> <Button type="primary">Login</Button> </Link>
                        <br />
                        <br />
                        <p>Don't have an account? <span onClick={() => setType('signup')} style={{ color: 'blue', cursor: 'pointer' }}>Signup</span></p>
                        </div> : null
                }
            </div>
        </div> 
        </>
    );
}

export default Auth;