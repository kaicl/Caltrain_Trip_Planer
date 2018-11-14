import React, { Component } from 'react';

import './css/main.css';
import './css/caltrain.css';

class Tripinfo extends Component{
    render() {
    const destTime = this.props.arrive_time;
    const origTime = this.props.depart_time;
    //var destTime = "20:32:00";
    //var origTime = "17:39:00";
    var a=origTime.split(":");
    var b=destTime.split(":");
    const tripTime = timeDifference(a,b);
    const fares = this.props.fares;
    //console.log(tripTime);
    
    
    function timeToMin(t){
      var h = parseInt(t[0],10)
      var m = parseInt(t[1],10)
      var ms = 60*h + m
      //console.log(">>>"+h+" " + m+ " "+ms)
        return (ms);
        //console.log("mi: "+parseInt(t[0],10));
    }
    function minToTime(m){
        var h = "";
        var m_new = ""; 
        
        //console.log("d: "+ m)
        if(m>=60){
            h = Math.floor(m/60)+ " hr ";
        }
        m_new = m%60 + " min";
        
        return h+m_new;
    }
    
    function timeDifference(t1,t2){
      //console.log("ta: "+t1+" "+t2)
        var tt1 = timeToMin(t1);
        var tt2 = timeToMin(t2);
        var d = tt2-tt1;
        //console.log(tt1+".."+tt2+"..."+d)
        return minToTime(d);
    }
  
  
  
    
    

    return (
        <section className="trip">
            <header className="time_schedule">
            <p><span id="time_ori">{origTime}</span> >>><i className="fas fa-chevron-right">
            </i> <span id="time_dest">{destTime}</span>
            <span id="time_take">{tripTime}</span></p></header>
            <details className="fare_detail">
                <summary><span id="detail">Detail</span>
                <span id="fare">$ {fares}</span></summary>
                
                <section className="detail_info"></section>
            </details>
                
        </section>
    );
  }
}

export default Tripinfo;