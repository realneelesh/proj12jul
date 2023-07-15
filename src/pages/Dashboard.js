import React from 'react';
import { Button, Col, Dropdown, Input, Row, Tabs } from 'antd';
import { DatePicker, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;

 

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `Access and Visibility`,
    children: <div align="left">
        <Row>
            <Col span={12} style={{paddingLeft: '30px'}}>
            <h2><u>Incoming Raw Material</u></h2>
        Source: <select>
            <option value="volvo">Farmers</option>
            <option value="volvo">Market</option>
            <option value="volvo">Cold Storage</option>
        </select>
             
        <br/>
        <br/>
        Select type of material: <select>
            <option value="volvo">Millets</option>
            <option value="volvo">Sea food</option>
        </select>
        <br/>
        <br/>
        <sub>Pick a time range to see incoming raw material for that period of time</sub> <br/> 
        <RangePicker />
        <br/>
             <br/>
             <Button size='small' type="primary">Submit</Button>
            </Col>


            <Col span={12}>
            <h2><u>Outgoing Raw Material</u> <sub>to MFPs</sub></h2>
            Select type of material: <select>
            <option value="volvo">Millets</option>
            <option value="volvo">Sea food</option>
        </select>
        <br/>
        <br/>
        <sub>Pick a time range to see outgoing raw material for that period of time</sub> <br/> 
        <RangePicker />
        <br/>
             <br/>
             <Button size='small' type="primary">Submit</Button>
            </Col>
        </Row>
       <br/>
      
        
    </div>,
  },
  {
    key: '2',
    label: `Processes`,
    children: <div align="left"> 
       <Row>
        <Col span={7} style={{paddingLeft: '30px'}}>
        <h2><u>Generate Quality Check Reports</u></h2>
             
             <br/>
             Select type of material: <select>
            <option value="volvo">Millets</option>
            <option value="volvo">Sea food</option>
        </select>
        <br />
        <br />
        Grading: <select>
            <option value="volvo">G1</option>
            <option value="volvo">G2</option>
            <option value="volvo">G3</option>
        </select>

             <br/>
             <br/>
             <Input placeholder="Enter quantity" />
             <br/>
             <br/>
             <Button size='small' type="primary">Generate Report</Button>
 <br/>
 <br/>
 <br/>

            <h2><u>Previous Quality Check Reports</u></h2>
             
             <br/>
             Select type of material: <select>
            <option value="volvo">Millets</option>
            <option value="volvo">Sea food</option>
        </select>
        <br />
        <br />
        <sub>Pick a time range</sub><br/>
             <RangePicker />
             <br/>
             <br/>
             <Button size='small' type="primary">Submit</Button>

        </Col>
        <Col span={17} align="center">

        <br/>
            <br/> 
            <img src="https://thumbs.dreamstime.com/b/quality-control-businessman-working-holographic-interface-motion-graphics-quality-control-businessman-working-holographic-99397270.jpg" alt="logo" style={{ height: '180px', borderRadius: '10px' }} />

            <br/>  
            <br/>  
            <br/>
            <br/>
                <h2><u>Payments</u></h2> 
                <div style={{
                    height: '60px',
                    borderRadius: '15px',
                    backgroundColor: 'rgb(230, 230, 230)',
                    width: '80%'
                }}></div>
                <br/>
                 <div style={{
                    height: '60px',
                    borderRadius: '15px',
                    backgroundColor: 'rgb(230, 230, 230)',
                    width: '80%'
                }}></div>
                <br/>
                 <div style={{
                    height: '60px',
                    borderRadius: '15px',
                    backgroundColor: 'rgb(230, 230, 230)',
                    width: '80%'
                }}></div>
        </Col>

       </Row>
    </div>,
  },
  {
    key: '3',
    label: `Analytics and Insights`,
    children: <div align="left" style={{
        paddingLeft: '30px'
    }}>
        <Row>
            <Col span={12}>
            <h2><u>Demand and Supply Forecast</u></h2>
        <br/>
        <img src="https://cdn.statcdn.com/Statistic/1210000/1211868-blank-754.png" alt="logo" style={{ height: '200px', borderRadius: '10px' }} />
        <br/>
        <br/>
        <br/>
        <br/>
        <h2><u>Material Stagnation</u></h2>
        <br/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuFomdPoFcaTVt1IADtvfSV72WjY4xj2euA&usqp=CAU" alt="logo" style={{ height: '300px', borderRadius: '10px' }} />
            </Col>
            <Col span={12}>
            <h2><u>Successful Dispatch Operations</u></h2>
        <br/>
        <img src="https://community.esri.com/t5/image/serverpage/image-id/4946i40948E445F919E64/image-size/medium?v=v2&px=400" alt="logo" style={{ height: '280px', borderRadius: '10px' }} />

        <br/>
        <br/>
        <br/>
        <br/>
        <h2><u>Failed Dispatch Operations</u></h2>
        <br/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLexuCsd-90Z1joYGY-Zug6LFKDYks_Vxa5A&usqp=CAU" alt="logo" style={{ height: '180px', borderRadius: '10px' }} />
            </Col>
        </Row>
    </div>,
  },
]; 

function Dashboard(props) {
    return (
        <div style={{padding: '69px 10px'}}>
            <br/>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );
}

export default Dashboard;