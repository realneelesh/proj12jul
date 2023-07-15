import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function NavigationBar(props) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '74px',
            width: '100vw', 
            position: 'fixed',
            paddingLeft: '10px',
        }}>
            <Link to="/" style={{textDecoration: 'none'}}>
            <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                
                <img src="https://www.letsendorse.com/images/xletsEndorse-Logo-Black-Transparent.png.pagespeed.ic.ySi4ImWpcY.webp" alt="logo" style={{ height: '64px' }} />
                &nbsp;&nbsp;
                &nbsp; 

            </div>
            </Link>


            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Link to="/about" style={{textDecoration: 'none'}}><h4 style={{color: 'black', marginRight: '20px', fontWeight: '400', cursor :'pointer'}}>About</h4></Link>
                <Link to="/contactus" style={{textDecoration: 'none'}}><h4 style={{color: 'black', marginRight: '20px', fontWeight: '400', cursor :'pointer'}}>Contact us</h4></Link>
                {
                    localStorage.getItem('user') === 'admin' ? <Link to="/profile" style={{textDecoration: 'none'}}><h4 style={{color: 'black', marginRight: '20px', fontWeight: '400', cursor :'pointer'}}>Admin</h4></Link> : localStorage.getItem('user') === 'consumer' ? <Link to="/profile" style={{textDecoration: 'none', color: 'orange'}}>&nbsp;&nbsp;<UserOutlined style={{color: 'black'}} /> CPU &nbsp;&nbsp;&nbsp;&nbsp; </Link> : <Link to="/auth" style={{textDecoration: 'none'}}><h4 style={{color: 'black', marginRight: '20px', fontWeight: '400', cursor :'pointer'}}>Sign up</h4></Link>
                }
            </div>

        </div>
    );
}

export default NavigationBar;