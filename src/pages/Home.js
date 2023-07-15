import React from 'react';
import { Button, DatePicker } from 'antd';
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div align="center">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <h1 style={{fontWeight: '500'}}>Coordination and Visibility Portal</h1>
           <br/>
           <br/> 
           <Link to="/auth"><Button type="primary" size="large">Get Started</Button></Link>
        </div>
    );
}

export default Home;