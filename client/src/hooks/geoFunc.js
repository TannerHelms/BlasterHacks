import { useState, useEffect } from 'react';
import { retrieveGeo } from '../requests/retrieveGeo.js';

export async function useGeo() {
  var resp = await retrieveGeo();
  return {
    latitude: resp.latitude,
    longitude: resp.longitude,
    city: resp.city,
    state: resp.region,
  }
}
