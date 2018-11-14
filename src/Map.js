import React, { Component } from 'react';
import {GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import './css/main.css';
import './css/caltrain.css';


class MapCompent extends Component{



 /*constructor(props) {
   
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
    
    onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
*/
    render() {
   
        //const id = this.props.id;
        //const station =  this.props.stations.find(station => (station.stop_id === id));
        const lat =this.props.stop_lat;
        const lon = this.props.stop_lon;
        console.log(lat+",,,,"+lon);
    return (
        <Map
              google = { this.props.google }
              onClick = { this.onMapClick }
              zoom = { 14 }
              initialCenter = {{ lat: lat, lng: lon }}
            >
            <Marker
              onClick = { this.onMarkerClick }
              title = { 'Changing Colors Garage' }
              position = {{ lat: lat, lng: lon }}
              name = { 'Changing Colors Garage' }
            />
              
            
          
        </Map>
        
        
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDPjBxb3uRr52BUmhCrqB5abXUjS6ln0Yk')
})(MapCompent)