import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid " id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href=''> Track Tickets</a>
        
        </div>

         <div className=" row p-5 m-3"  >
            <div className="col-6  p-5" >
                <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                <input  placeholder='Eg. how do activate F&o...'/> <br />
                <a href="">Track account opening</a> <br />
                <a href="">Track segment activation</a> <br />
                <a href="">Intraday margins</a> <br />
                <a href="">Kite user manual</a>
           </div>
            <div className=" col-6  " >
                 <h1>Featured</h1>
                 <ol>
                    <li> <a href="">Latest Intraday leverages and Square-off timings</a> <br /></li>
                    <li ><a href="">Current Buybacks - July 2026</a> <br /></li>
                 </ol>
            </div>
        
        </div>
         
      </section>
   
     );
}

export default  Hero;