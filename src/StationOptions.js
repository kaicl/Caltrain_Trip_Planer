import React, { Component } from 'react';

import './css/main.css';
import './css/caltrain.css';

class StationOptions extends Component{
    render() {
    const {stop_id, stop_name} = this.props;
   
    return (
        <option value={stop_id}>{stop_name}</option>
    );
  }
}

export default StationOptions;