"use client"
import { VectorMap } from '@react-jvectormap/core'
import React from 'react'
import { trMill } from "@react-jvectormap/turkey"
import { plates } from './plates'
import { map } from './customMap'
function Vectoral() {
    const onRegionClick = (e, code) => {
        console.log(code);
        let plate = plates[code];
        let url = "tki.com/sorgula?plaka=" + plate;
    }

    return (
        <VectorMap onRegionClick={onRegionClick}
            className='vmap'
            map={trMill}>
        </VectorMap>
    )
}

export default Vectoral
// npm install @react-jvectormap/core jquery
// npm install @react-jvectormap/turkey