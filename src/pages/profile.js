import { UserOutlined } from '@ant-design/icons';
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
            <div style={{
                position: 'fixed',
                top: '64px',
                left: '0',
                height: 'calc(100vh - 64px)',
                width: '17vw', 
                backgroundColor: '#DEDEDE',
            }}>
                {/* Left Sidebar */}
                <br/>
                <br/>
                <br/>
                <UserOutlined style={{fontSize: '110px', border: '2px solid grey', borderRadius: '50%', padding: '20px'}} />
                <br/>
                <br/>

                <br/>
                <br/>
                <Button type="dashed" onClick={()=>{
                localStorage.removeItem('user');
                navigate('/');   
                window.location.reload();
            }}>Log out</Button>
            </div>

           
        </div>
    );
}

export default Profile;