"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useLoadScript, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api"
import { useRef } from 'react'
export default function Home() {
  const map = useRef(null);

  const script = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY });
  // 39.94826471353634, 32.829480863906234
  const openInfoWindow = () => {
    const infoWindow = new google.maps.InfoWindow({});

    infoWindow.setPosition({ lat: 39.94826471353634, lng: 32.829480863906234 });
    infoWindow.setContent(`<h3>Türkiye Kömür İşletmeleri </h3>`)
    infoWindow.open(map);
  }
  return (
    <>
      {!script.isLoaded && <div>Harita yükleniyor...</div>}
      {script.isLoaded &&
        <div className='map-wrapper'>
          <GoogleMap ref={map} onLoad={(e) => console.log("Map yüklendi..")} onClick={(e) => console.log(e)} center={{ lat: 39.94826471353634, lng: 32.829480863906234 }} mapContainerClassName='map' zoom={17}>
            <Marker onClick={(e) => { openInfoWindow(e) }} position={{ lat: 39.94826471353634, lng: 32.829480863906234 }}>
            </Marker>
          </GoogleMap>
        </div>
      }
    </>
  )
}
// npm i @react-google-maps/api