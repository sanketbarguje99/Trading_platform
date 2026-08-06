import React from 'react';


function Team() {
    return ( 
       <div className="container">
      <div className="row p-5  mt-5 border-top">
        <h1 className=" text-center">
         People
        </h1>
      </div>

      <div className="row p-5   text-muted " 
      style={{lineHeight:"1.8" , fontSize:"1.2em"}}>
        <div className="col-6 p-5 text-center">
            <img src='media\images\sanket.jpeg' style={{width:"45%" ,borderRadius:"100%"}} />
            <h4 className='mt-5'>Sanket Barguje</h4>
            <h6 >Founder , CEO</h6>
        </div>

        <div className="col-6 p-5" >
            <p>Sanket is a Full Stack Web Developer passionate about creating responsive and user-friendly web applications. He enjoys building projects using React.js, Node.js, Express.js, and MongoDB while continuously learning modern web technologies.

He is focused on improving his technical skills, solving real-world problems, and building projects that enhance user experience.

Coding, learning new technologies, and working on innovative ideas are his passion.

Connect on <a  href='' style={{textDecoration:"none"}}>LinkedIn</a> / <a href='' style={{textDecoration:"none"}}>GitHub</a> /<a href='' style={{textDecoration:"none"}}> Email </a></p>
        </div>
      </div>
    </div>
     );
}

export default Team;