
'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const isMapInitialized = useRef(false);

  useEffect(() => {
    if (mapRef.current && !isMapInitialized.current) {
      const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([51.505, -0.09]).addTo(map)
        .bindPopup('Welcome to my map app.')
        .openPopup();
        
      isMapInitialized.current = true;
    }
  }, []);

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};

export default Map;
