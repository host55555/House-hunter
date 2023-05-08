import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Map = ({ apiKey, center }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
    });

    loader.load().then(() => {
      const options = {
        center: center,
        zoom: 8,
      };

      const mapInstance = new window.google.maps.Map(mapRef.current, options);
      setMap(mapInstance);
    });
  }, [apiKey, center]);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "200px" }}
    />
  );
};

export default Map;
