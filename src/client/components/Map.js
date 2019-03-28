import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{fontSize: 20}}>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 29.652283,
      lng: -82.330367
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:  'AIzaSyDvzJf15RopD2CyZGTJULWo0WgdDk0aujo'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={29.652283}
            lng={-82.330367}
            text={'📍 Essence Events'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
