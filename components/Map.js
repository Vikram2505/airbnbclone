import ReactMapGL,{Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';
import getCenter  from 'geolib/es/getCenter';

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({})

    const coordinates = searchResults.map(result=> ({
        longitude: result.long,
        latitude: result.lat,        
    }))
    const center = getCenter(coordinates);
    
    const [viewport, setViewport] = useState({ 
        width:"100%",
        height:"100%",
        position: 'fixed',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
      });
    return (
        <ReactMapGL
        {...viewport}
        mapStyle='mapbox://styles/rojehunopiq/ckxoz64wvdk8z14pbe11m9o9w'
        mapboxApiAccessToken={process.env.mapbox_key}       
        onViewportChange={(viewport) => setViewport(viewport)}
        
      >
          {searchResults.map(result => (
              <div key={result.long}>
                  <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10} >
                            <p onMouseMove={() =>setSelectedLocation(result)} className='cursor-pointer animate-bounce text-2xl' 
                            aria-label='push-pin'>📍</p>
                  </Marker>

                  {/* The Popup that show if we hover on pin location */}
                  {selectedLocation.long === result.long ? (
                  <Popup onPointerMove={() => setSelectedLocation({})} closeOnClick={true} latitude={result.lat}
                    longitude={result.long}
                  >
                      {result.title}</Popup>) : 
                    (false)}
              </div>
          ))}
          </ReactMapGL>
    )
}

export default Map
