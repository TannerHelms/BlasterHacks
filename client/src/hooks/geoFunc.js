import { useState, useEffect } from 'react';
import { retrieveGeo } from '../requests/retrieveGeo.js';

export function useGeo() {
  const [location, setLocation] = useState({
    latitude: 0.0,
    longitude: 0.0,
    city: 'TBD',
    state: 'TBD',
  });

  const fetchGeoData = () => {
    retrieveGeo().then(resp => {
      setLocation({
        latitude: resp.latitude,
        longitude: resp.longitude,
        city: resp.city,
        state: resp.region,
      });
    });
  };
  return { location, fetchData: fetchGeoData };
}
