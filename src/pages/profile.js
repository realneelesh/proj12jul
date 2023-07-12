import { Button } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Profile(props) {
    const navigate = useNavigate();
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw'
        }}>
           <Button type="primary" onClick={()=>{
                localStorage.removeItem('user');
                navigate('/');   
                window.location.reload();
            }}>Log out</Button>
        </div>
    );
}

export default Profile;