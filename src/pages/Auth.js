import { Input, Button } from 'antd';
import React, { useState } from 'react';

function Auth(props) {

    const [type, setType] = useState('login');    // state variable to store the type of form

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 64px)',
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
                        <Button type="primary">Login</Button>
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
                        <Button type="primary">Signup</Button>
                        <br />
                        <br />
                        <p>Already have an account? <span onClick={() => setType('login')} style={{ color: 'blue', cursor: 'pointer' }}>Login</span></p>
                        </div> : null
                }
            </div>
        </div>
    );
}

export default Auth;