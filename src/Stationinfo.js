import React, { Component } from 'react';

import './css/main.css';
import './css/caltrain.css';

class Stationinfo extends Component{
 

    render() {
        const { stop_name,zone_id,wheelchair_boarding,stop_url} = this.props;
        const wheelchair = Wheelchair(wheelchair_boarding);
        //const id = this.props.id;
        //const station =  this.props.stations.find(station => (station.stop_id === id));
        //const stop_name = station.stop_name;
        //const zone_id = station.zone_id;
        //const wheelchair = Wheelchair(this.props.wheelchair_boarding);
        //const stop_url = station.stop_url;
        
    function Wheelchair(wheelchair_id){
       
        switch(wheelchair_id){
            case '1':
                return 'Elevator Available';
            case '2':
                return 'No Lift Available';
            default:
                return 'N/A'
        }
    }
    return (
        <article>
            <h2 id="name">{stop_name}</h2>
            <p id="zoon"><span>Zone {zone_id} </span></p>
            <p>Wheelchair: {wheelchair}</p>
            
            <a id="link" href={stop_url} target="_blank"><span>WEBSITE</span></a>
        </article>
        
        
    );
  }
}

export default Stationinfo;