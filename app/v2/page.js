"use client"
import { MarkerClusterer, SuperClusterAlgorithm } from '@googlemaps/markerclusterer'
import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks'
// import { usePlacesAutocomplete } from "@react-google-maps/api"
import React, { useCallback, useEffect, useRef, useState } from 'react'


const locations = [
    { lat: 39, lng: 32, info: 'Deneme' },
    { lat: 39.210, lng: 32.1235, info: 'Deneme' },
    { lat: 39.212, lng: 32.1235, info: 'Deneme' },
    { lat: 39.207, lng: 32.1235, info: 'Deneme' },
    { lat: 39.205, lng: 32.1235, info: 'Deneme' },
    { lat: 39.210, lng: 32.1235, info: 'Deneme' },
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
        let markers = []
        locations.map(location => {
            const marker = new google.maps.Marker({
                // map: map,
                position: { lat: location.lat, lng: location.lng }
            });
            const infoWindow = new google.maps.InfoWindow();
            marker.addListener('click', (e) => {
                infoWindow.setPosition({ lat: location.lat, lng: location.lng });
                infoWindow.setContent(`<h3>${location.info}</h3> <br/> <p>Hipodrom Cad. no 5</p>`)
                infoWindow.open(map);
            })
            marker.setMap(map);
            markers.push(marker);
        })
        // npm i @googlemaps/markerclusterer
        new MarkerClusterer({ markers, map, algorithm: new SuperClusterAlgorithm({ radius: 100 }) })
    }

    const [mapContainer, setMapContainer] = useState(null)
    const mapRef = useCallback(node => {
        node && setMapContainer(node);
    }, []);

    // const placeApi = usePlacesAutocomplete();

    useEffect(() => {

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
