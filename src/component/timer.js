import React, { Component } from 'react';
import './timer.css'
class Timer extends Component {
    render() { 
      let sec=this.props.nombres;
         let h=0;
         let m=0;
         let s=0;
         let x=function(y){
             return y<10 ? '0'+ y : y;
            };
           
              h= Math.floor(sec / 3600);
              m= Math.floor((sec - (h * 3600)) / 60);
              s= Math.floor(sec - (h * 3600) - (m * 60));
           
        return (  
            <div className='gosdiv'>
      <div className='divT'>
      <div className='div2'>
      <div className='lesdiv'>    
      <div className="div2-1">
                <div id='div21'> <sapn id="span1">Hour </sapn></div>
                <div id='div22'><span id="span2">Minute </span></div>
                <div id='div23'><span id="span3">Second </span></div>
             </div>
             <div className="ss">
             <span className="s1">{x(h)}</span>
           <span className="points">:</span>
           <span className="s1">{x(m)}</span>
           <span className="points">:</span>
           <span className="s1">{x(s)}</span>   
             </div> 
             </div>
      <div className="lesbtn">
        <button className="btn1">Start</button>
        <button className="btn2">Reset</button>


      </div>       

      
      </div>
      </div>
  
      </div>
        );
    }
}
 
export default Timer;