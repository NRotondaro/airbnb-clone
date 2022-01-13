import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

export const Map = ({ searchResults }) => {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/niksonr/ckycwtfhk1vrh14nxzeiryn4p'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p className='cursor-pointer text-2xl'>📌</p>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
};
