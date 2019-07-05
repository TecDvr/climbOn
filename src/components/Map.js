import React from 'react';
import GoogleMapReact from 'google-map-react';
import * as utils from '../helper/utils';

const CustomMarker = ({ text }) => <div className="custom-marker"><p>{text}</p></div>;

export default class Map extends React.Component {
  render() {
    const GoogleMapsMarkers = utils.markers.map(marker => (
      <CustomMarker
        key={`marker_${marker.name}`}
        lat={marker.latlng[0]}
        lng={marker.latlng[1]}
        text={marker.name}
      />
    ));

    return (
    <div style={{ height: '70vh', width: '100%' }}>            
      <GoogleMapReact
        defaultCenter={utils.mapConfig.center}
        defaultZoom={utils.mapConfig.zoom}
        bootstrapURLKeys={{
          key: 'AIzaSyAgTjnsye4SUgDCUy-ylhegmtisFDeO8po',
          language: 'english'
        }}
      >
        {GoogleMapsMarkers}
      </GoogleMapReact>
      </div>
    );
  }
}