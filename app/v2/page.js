"use client"
import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks'
import React, { useRef } from 'react'

function Maps() {
    const mapOptions = {
        center: { lat: 39.94826471353634, lng: 32.829480863906234 },
        zoom: 17
    }
    const onLoad = (e) => {
        console.log(e);
    }
    const mapRef = useRef();
    return (
        <GoogleMapsProvider
            googleMapsAPIKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            mapOptions={mapOptions}
            onLoadMap={onLoad}
        >
            <div ref={mapRef} style={{ height: '100%' }} />
        </GoogleMapsProvider>
    )
}
export default Maps

// npm i @ubilabs/google-maps-react-hooks
