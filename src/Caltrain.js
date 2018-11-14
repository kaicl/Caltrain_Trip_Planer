import React, { Component } from 'react';
//import fetch from 'ismorphic-fetch'
//import ReactDOM from 'react-dom';
import axios from 'axios';

import './css/main.css';
import './css/caltrain.css';
import Stationinfo from './Stationinfo';
import Tripinfo from './Tripinfo';

import StationOptions from './StationOptions';
import MapCompent from './Map.js';
//import {GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
//import GoogleMapReact from 'google-map-react';

class Caltrain extends Component {
  
  static defaultProps = {

    stations: [{stop_id:"7001",stop_name:"San Francisco Caltrain",stop_lat:"37.77639",stop_lon:"-122.394992",zone_id:"1",stop_url:"http://www.caltrain.com/stations/sanfranciscostation.html",wheelchair_boarding:"1"}
,{stop_id:"7002",stop_name:"22nd Street Caltrain",stop_lat:"37.757599",stop_lon:"-122.39188",zone_id:"1",stop_url:"http://www.caltrain.com/stations/22ndstreetstation.html",wheelchair_boarding:"2"}
,{stop_id:"7003",stop_name:"Bayshore Caltrain",stop_lat:"37.709537",stop_lon:"-122.401586",zone_id:"1",stop_url:"http://www.caltrain.com/stations/bayshorestation.html",wheelchair_boarding:"1"}
,{stop_id:"7004",stop_name:"South San Francisco Caltrain",stop_lat:"37.65589",stop_lon:"-122.40487",zone_id:"1","stop_url":"http://www.caltrain.com/stations/southsanfranciscostation.html",wheelchair_boarding:"2"}
,{stop_id:"7005",stop_name:"San Bruno Caltrain",stop_lat:"37.631128",stop_lon:"-122.411968",zone_id:"1",stop_url:"http://www.caltrain.com/stations/sanbrunostation.html",wheelchair_boarding:"1"}
,{stop_id:"7006",stop_name:"Millbrae Caltrain",stop_lat:"37.59988",stop_lon:"-122.386647",zone_id:"2",stop_url:"http://www.caltrain.com/stations/millbraetransitcenter.html",wheelchair_boarding:"1"}
,{stop_id:"7007",stop_name:"Broadway Caltrain",stop_lat:"37.58764",stop_lon:"-122.36265",zone_id:"2",stop_url:"http://www.caltrain.com/stations/broadwaystation.html",wheelchair_boarding:"2"}
,{stop_id:"7008",stop_name:"Burlingame Caltrain",stop_lat:"37.580197",stop_lon:"-122.3449",zone_id:"2",stop_url:"http://www.caltrain.com/stations/burlingamestation.html",wheelchair_boarding:"1"}
,{stop_id:"7009",stop_name:"San Mateo Caltrain",stop_lat:"37.568087",stop_lon:"-122.323851",zone_id:"2",stop_url:"http://www.caltrain.com/stations/sanmateostation.html",wheelchair_boarding:"1"}
,{stop_id:"7010",stop_name:"Hayward Park Caltrain",stop_lat:"37.552938",stop_lon:"-122.309338",zone_id:"2",stop_url:"http://www.caltrain.com/stations/haywardparkstation.html",wheelchair_boarding:"1"}
,{stop_id:"7011",stop_name:"Hillsdale Caltrain",stop_lat:"37.537868",stop_lon:"-122.297349",zone_id:"2",stop_url:"http://www.caltrain.com/stations/hillsdalestation.html",wheelchair_boarding:"1"}
,{stop_id:"7012",stop_name:"Belmont Caltrain",stop_lat:"37.52089",stop_lon:"-122.275738",zone_id:"2",stop_url:"http://www.caltrain.com/stations/belmontstation.html",wheelchair_boarding:"1"}
,{stop_id:"7013",stop_name:"San Carlos Caltrain",stop_lat:"37.50805",stop_lon:"-122.26015",zone_id:"2",stop_url:"http://www.caltrain.com/stations/sancarlosstation.html",wheelchair_boarding:"1"}
,{stop_id:"7014",stop_name:"Redwood City Caltrain",stop_lat:"37.486159",stop_lon:"-122.231936",zone_id:"2",stop_url:"http://www.caltrain.com/stations/redwoodcitystation.html",wheelchair_boarding:"1"}
,{stop_id:"7015",stop_name:"Atherton Caltrain",stop_lat:"37.464645",stop_lon:"-122.19779",zone_id:"3",stop_url:"http://www.caltrain.com/stations/athertonstation.html",wheelchair_boarding:"2"}
,{stop_id:"7016",stop_name:"Menlo Park Caltrain",stop_lat:"37.454856",stop_lon:"-122.182297",zone_id:"3",stop_url:"http://www.caltrain.com/stations/menloparkstation.html",wheelchair_boarding:"1"}
,{stop_id:"7017",stop_name:"Palo Alto Caltrain",stop_lat:"37.443475",stop_lon:"-122.164614",zone_id:"3",stop_url:"http://www.caltrain.com/stations/paloaltostation.html",wheelchair_boarding:"1"}
,{stop_id:"7019",stop_name:"California Ave Caltrain",stop_lat:"37.429365",stop_lon:"-122.141927",zone_id:"3",stop_url:"http://www.caltrain.com/stations/californiaavenuestation.html",wheelchair_boarding:"1"}
,{stop_id:"7020",stop_name:"San Antonio Caltrain",stop_lat:"37.407323",stop_lon:"-122.107069",zone_id:"3",stop_url:"http://www.caltrain.com/stations/sanantoniostation.html",wheelchair_boarding:"1"}
,{stop_id:"7021",stop_name:"Mountain View Caltrain",stop_lat:"37.394459",stop_lon:"-122.075956",zone_id:"3",stop_url:"http://www.caltrain.com/stations/mountainviewstation.html",wheelchair_boarding:"1"}
,{stop_id:"7022",stop_name:"Sunnyvale Caltrain",stop_lat:"37.378916",stop_lon:"-122.031372",zone_id:"3",stop_url:"http://www.caltrain.com/stations/sunnyvalestation.html",wheelchair_boarding:"1"}
,{stop_id:"7023",stop_name:"Lawrence Caltrain",stop_lat:"37.370598",stop_lon:"-121.997114",zone_id:"4",stop_url:"http://www.caltrain.com/stations/lawrencestation.html",wheelchair_boarding:"1"}
,{stop_id:"7024",stop_name:"Santa Clara Caltrain",stop_lat:"37.353238",stop_lon:"-121.93608",zone_id:"4",stop_url:"http://www.caltrain.com/stations/santaclarastation.html",wheelchair_boarding:"1"}
,{stop_id:"7025",stop_name:"College Park Caltrain",stop_lat:"37.342384",stop_lon:"-121.9146",zone_id:"4",stop_url:"http://www.caltrain.com/stations/collegeparkstation.html",wheelchair_boarding:"2"}
,{stop_id:"7026",stop_name:"San Jose Diridon Caltrain",stop_lat:"37.329239",stop_lon:"-121.903011",zone_id:"4",stop_url:"http://www.caltrain.com/stations/sanjosediridonstation.html",wheelchair_boarding:"1"}
,{stop_id:"7027",stop_name:"Tamien Caltrain",stop_lat:"37.31174",stop_lon:"-121.883721",zone_id:"4",stop_url:"http://www.caltrain.com/stations/tamienstation.html",wheelchair_boarding:"1"}
,{stop_id:"7028",stop_name:"Capitol Caltrain",stop_lat:"37.284102",stop_lon:"-121.841955",zone_id:"5",stop_url:"http://www.caltrain.com/stations/capitolstation.html",wheelchair_boarding:"1"}
,{stop_id:"7029",stop_name:"Blossom Hill Caltrain",stop_lat:"37.252422",stop_lon:"-121.797643",zone_id:"5",stop_url:"http://www.caltrain.com/stations/blossomhillstation.html",wheelchair_boarding:"1"}
,{stop_id:"7030",stop_name:"Morgan Hill Caltrain",stop_lat:"37.129363",stop_lon:"-121.650244",zone_id:"6",stop_url:"http://www.caltrain.com/stations/morganhillstation.html",wheelchair_boarding:"1"}
,{stop_id:"7031",stop_name:"San Martin Caltrain",stop_lat:"37.085225",stop_lon:"-121.610049",zone_id:"6",stop_url:"http://www.caltrain.com/stations/sanmartinstation.html",wheelchair_boarding:"1"}
,{stop_id:"7032",stop_name:"Gilroy Caltrain",stop_lat:"37.003538",stop_lon:"-121.566088",zone_id:"6",stop_url:"http://www.caltrain.com/stations/gilroystation.html",wheelchair_boarding:"1"}]
   
  }
  
  
 constructor(props) {
    super(props);
    var date = String(new Date().toLocaleString()).split(' ');
    var hours = String(date[1]).split(':');
    var mm = String(date[2]);  
    
    if(mm ==='PM'){
      hours[0] = parseInt(hours[0],10)+12;
    }
      
    var time = hours[0]+":"+hours[1]+":"+hours[2];
    
    
    this.state = {from_stop:'none',
                  to_stop:'none',
                  curTime :time,
                  fare:0,
                  mytrip: []
    };

    
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
   

  handleFromChange(event) {
    //{ stop_name,zone_id,wheelchair_boarding,stop_url}
    const from_stop_id = event.target.value;
    const start_station =this.props.stations.find(station => (station.stop_id === from_stop_id));
    this.setState({from_stop:start_station});
    //console.log(start_station);
  }
  handleToChange(event) {
    const to_stop_id = event.target.value;
    const end_station =this.props.stations.find(station => (station.stop_id === to_stop_id));
    this.setState({to_stop:end_station});
    //console.log(end_station);
  }
  handleSubmit(event) {
    const url= `http://carpet.coenproject.me/trips?source=${this.state.from_stop.stop_id}&dest=${this.state.to_stop.stop_id}&time=${this.state.curTime}&fbclid=IwAR07hPS_5IlRyIGvdDqlz_adaV7DJ8n9Lp5OeVelwqF6mq6iWCtMaomAAO0`
    //const url= `http://carpet.coenproject.me/trips?source=7001&dest=7003&time=12:50:00&fbclid=IwAR07hPS_5IlRyIGvdDqlz_adaV7DJ8n9Lp5OeVelwqF6mq6iWCtMaomAAO0`
    
    axios.get(url)
      .then(res => {
        const mytrip = res.data;
        this.setState({ mytrip });
        //console.log("mt: "+mytrip)
      })
     
    var fare = 3.75+ (2.25*Math.abs(parseInt(this.state.from_stop.zone_id,10)- parseInt(this.state.to_stop.zone_id,10)))
    
    this.setState({fare:fare});
    event.preventDefault();
  }
  
 


  componentDidMount() {
    var date = String(new Date().toLocaleString()).split(' ');
    var hours = String(date[1]).split(':');
    var mm = String(date[2]);  
    
    if(mm ==='PM'){
      hours[0] = parseInt(hours[0],10)+12;
    }
    
    var time = hours[0]+":"+hours[1]+":"+hours[2];
     console.log("t0: "+time)   
      setInterval( () => {
      this.setState({
        curTime : time
      })
    },30000)
    
  }
 
 
 
  render() {
  
  ///////////////////////
    const start_station  = this.state.from_stop;
    const end_station = this.state.to_stop
    var nextTime ="";
    var comingtrain= "";
    
    const nextT = this.state.mytrip;
    
    if(nextT.length > 0){
      nextTime = nextT[0].depart_time;
      var a=this.state.curTime.split(":");
      var b=nextTime.split(":");
      comingtrain= timeDifference(a,b)
      console.log(nextTime);
    }
    
    
    //////////
    function timeToMin(t){
      var h = parseInt(t[0],10)
      var m = parseInt(t[1],10)
      var ms = 60*h + m
        return (ms);
    }
    function minToTime(m){
        var h = "";
        var m_new = ""; 
        
        if(m>=60){
            h = Math.floor(m/60)+ " hr ";
        }
        m_new = m%60 + " min";
        
        return h+m_new;
    }
    
    function timeDifference(t1,t2){
        var tt1 = timeToMin(t1);
        var tt2 = timeToMin(t2);
        var d = tt2-tt1;
        return minToTime(d);
    }
    
    ////////////////////////////
    /*const trips = this.props.trips.map((r,index)=>(
        <Tripinfo key={index} {...r} fares="$3.75"/>
    ));*/
    const trips = this.state.mytrip.map((r,index)=>(
        <Tripinfo key={index} {...r} fares={this.state.fare}/>
    ));
        
    const options = this.props.stations.map((r,index)=>(
        <StationOptions key={index} {...r}/>
    ));
    
    //const triangleCoords= [{lat: 37.77639, lng: -122.394992},
    //{lat: 37.757599, lng: -122.39188}];

    return (
      <div>
      
      <div className = "titlebar">
        <article className="in_title">
            <h2>Next train is leaving in</h2>
            <h3><span id="visit">{comingtrain}</span> </h3>
            
            <header><span>Cal</span>train</header>
        </article>
      </div>
      
      <div className="main">
        <section className="in_main">
          <header>
            <h2>PLANE YOUR TRIP</h2>
          </header>
          
          <div className="selection">
            <form onSubmit={this.handleSubmit}>
              <section className="dropdown" >
                <h3>Start</h3>
                <select className="dropdown-content" id="orig_starion"  
                  value={this.state.from_stop_id} onChange={this.handleFromChange}>
                      <option value = "none" > - </option>
                      {options}
                </select>
              </section>
              <section className="dropdown">
                <h3>End</h3>
                <select className="dropdown-content" id="dest_starion"  
                  value={this.state.to_stop_id} onChange={this.handleToChange}>
                      <option value = "none"> - </option>
                      {options}
                </select>
              </section>
              <input type="submit" value="GO" id="btn_test"/>
              
            </form>
          </div>
    
          <div className="trip_result .invisible-scrollbar">
            {trips}
          </div>
    
        </section>
      </div>
      
      <aside>
        <span id="start">START</span>
          <div className="orig_station invisible-scrollbar">
            <Stationinfo 
              stop_name ={start_station.stop_name} 
              zone_id={start_station.zone_id} 
              wheelchair_boarding= {start_station.wheelchair_boarding} 
              stop_url={start_station.stop_url}/>
          </div>
        <span id="end">GO TO</span>
          <div className="dest_station invisible-scrollbar">
            <Stationinfo 
              stop_name ={end_station.stop_name} 
              zone_id={end_station.zone_id} 
              wheelchair_boarding= {end_station.wheelchair_boarding} 
              stop_url={end_station.stop_url}/>
          </div>
    
        <div id="map">
          
          <MapCompent lat={start_station.stop_lat} lon={start_station.stop_lon}/>
        </div>
      </aside>

      <footer>
        <p><i className="fa fa-copyright" aria-hidden="true"></i> Kai Chieh Liu</p>
      </footer>
      </div>

    );
  }
}

export default Caltrain;

//export default GoogleApiWrapper({
//  apiKey: ('AIzaSyDPjBxb3uRr52BUmhCrqB5abXUjS6ln0Yk')
//})(Caltrain)
