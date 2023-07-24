"use client"
import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks'
import React, { useCallback, useRef, useState } from 'react'


const locations = [
    { lat: 39, lng: 32, info: 'Deneme' },
    { lat: 39.213, lng: 32.1235, info: 'Deneme 123' },
    { lat: 39.69123, lng: 32.123821, info: 'Deneme 321' },
    { lat: 38.123, lng: 33.2123, info: 'Deneme 123 ' },
    { lat: 37.231, lng: 33.2131231, info: 'Deneme 321' },
    { lat: 5, lng: 25, info: 'Deneme 321' },
]

function Maps() {
    const mapOptions = {
        center: { lat: 39.94826471353634, lng: 32.829480863906234 },
        zoom: 10
    }
    const onLoad = (map) => {
        addMarkers(map);
    }

    const addMarkers = (map) => {
        locations.map(location => {
            const marker = new google.maps.Marker({
                map: map,
                position: { lat: location.lat, lng: location.lng }
            });
            //marker.setMap(map);
        })
    }

    const [mapContainer, setMapContainer] = useState(null)
    const mapRef = useCallback(node => {
        node && setMapContainer(node);
    }, []);

    return (
        <GoogleMapsProvider
            googleMapsAPIKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            mapOptions={mapOptions}
            mapContainer={mapContainer}
            onLoadMap={onLoad}
        >
            <div ref={mapRef} style={{ height: '100vh' }} >
            </div>
        </GoogleMapsProvider>
    )
}
export default Maps

// npm i @ubilabs/google-maps-react-hooks
