
'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// You might need to import marker icons if they are not showing up
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// let DefaultIcon = L.icon({
//     iconUrl: icon.src,
//     shadowUrl: iconShadow.src
// });

// L.Marker.prototype.options.icon = DefaultIcon;


const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const isMapInitialized = useRef(false);

  useEffect(() => {
    if (mapRef.current && !isMapInitialized.current) {
      const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Example of adding a marker
      L.marker([51.505, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
        
      isMapInitialized.current = true;
    }
  }, []);

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};

export default Map;
