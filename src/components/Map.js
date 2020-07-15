import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../media/map-pin.svg';
const Marker = () => (
  <span className='dot'>
    <img src={MapMarker} alt='Marker' />
  </span>
);

function MapContainer(props) {
  const defaultCenter = {
    lat: 41.04372,
    lng: 28.98466,
  };

  return (
    <div style={{ height: '250px', width: '100%', marginTop: '20px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCwkEhQXTUAwqPnDRNMFuYZBC3NMwKwP9U' }}
        defaultCenter={defaultCenter}
        defaultZoom={10}
        onClick={(e) => {
          props.setCoord({ lat: e.lat, lng: e.lng });
        }}
      >
        <Marker lat={props.coord.lat} lng={props.coord.lng} />
      </GoogleMapReact>
    </div>
  );
}

export default MapContainer;
