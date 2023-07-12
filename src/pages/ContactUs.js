import { ExclamationCircleOutlined, MailFilled, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

function ContactUs(props) {
  return (
    <div align="left" style={{paddingLeft: '20px'}}>
        <br/>
        <br/>
        <br/>
        <h4 style={{fontWeight: '500'}}> <MailOutlined /> &nbsp; Email : ngo@gmail.com </h4>
        <h4 style={{fontWeight: '500'}}> 📍 &nbsp; Address : 435 St. Snts. Olivers street</h4>
        <h4 style={{fontWeight: '500'}}> <PhoneOutlined /> &nbsp; Contact Number : 09 09-090-999</h4>
        <br/>
        <br/>
        <br/>
        {/* queries form */}
        <h2 style={{fontWeight: '500'}}>Queries</h2>
        <br/>
        <br/>
        <form>
            <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '10vh'}}>
                 
                <div style={{width: '45%'}}> 
                    <Input type="email" id="email" name="email" placeholder="Your email.." style={{width: '100%'}}/>
                </div>
                <br/>
                <div style={{width: '45%'}}> 
                    <TextArea type="text" id="phone" name="phone" placeholder="Your query" style={{width: '100%'}}/>
                </div>
            </div> 
            <br/> 
            <br/>  
            <Button type="primary" onClick={() => {
                alert("Thank you for your query. We will get back to you soon.");
                document.getElementById("email").value = "";
                document.getElementById("phone").value = "";
            }} htmlType="submit" style={{width: '10%'}}>Submit</Button>
        </form>

      <div className="google-map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
         
          frameborder="0"
          style={{ border: 0, width: '50vw', 
          height: 'calc(100vh - 64px)',
          
          position: 'absolute', bottom: '0px', right: '0px' }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
