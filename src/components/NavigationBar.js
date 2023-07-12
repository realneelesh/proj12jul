import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function NavigationBar(props) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '64px',
            width: '100vw',
            backgroundColor: '#001529'
        }}>
            <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBzeDX_1RpSiQKM7kLj7RE4HxXYyriF1OqYe0-WH62g&s" alt="logo" style={{ height: '64px' }} />
                &nbsp;&nbsp;
                &nbsp;
                <h2 style={{color: 'white', fontWeight: '500'}}>N.G.O. Portal</h2>

            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Link to="/" style={{textDecoration: 'none'}}> <h4 style={{color: 'white', marginRight: '20px', fontWeight: '400', cursor :'pointer'}}>Home</h4></Link>
                <Link to="/about" style={{textDecoration: 'none'}}><h4 style={{color: 'white', marginRight: '20px', fontWeight: '400', cursor :'pointer'}}>About</h4></Link>
                <Link to="/contactus" style={{textDecoration: 'none'}}><h4 style={{color: 'white', marginRight: '20px', fontWeight: '400', cursor :'pointer'}}>Contact us</h4></Link>
                <UserOutlined style={{color: 'white', marginRight: '20px'}} />
            </div>

        </div>
    );
}

export default NavigationBar;