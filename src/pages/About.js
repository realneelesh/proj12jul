import React from 'react';

function About(props) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100vh',
            width: '70vw',
            margin: 'auto'
        }}> 
                {/* gallery card */}
                <div style={{
                    width: '300px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px 0px grey',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '20px',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <br/>
                    <br/>
                    <img src="https://images.pexels.com/photos/6647018/pexels-photo-6647018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="logo" style={{ height: '180px', borderRadius: '10px' }} />
                    <h3>Gallery</h3>
                    <p>NGO Portal is a platform where NGOs can register themselves and can get donations from the people.</p>
                    <br/> 

                </div>

                 {/* SS card */}
                 <div style={{
                    width: '300px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px 0px grey',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '20px',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <br/>
                    <br/>
                    <img src="https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?auto=compress&cs=tinysrgb&w=800" alt="logo" style={{ height: '180px', borderRadius: '10px' }} />
                    <h3>Success stories</h3>
                    <p>NGO Portal is a platform where NGOs can register themselves and can get donations from the people.</p>
                    <br/> 

                </div> 
        </div>
    );
}

export default About;