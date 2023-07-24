"use client"
import { VectorMap } from '@react-jvectormap/core'
import React, { useState } from 'react'
import { trMill } from "@react-jvectormap/turkey"
import { plates } from './plates'
import { map } from './customMap'
import 'bootstrap/dist/css/bootstrap.min.css'
const veriler = [
    {
        plaka: 34,
        komurTon: 45,
        aracSayisi: 12
    },
    {
        plaka: 41,
        komurTon: 120,
        aracSayisi: 15
    },
    {
        plaka: 6,
        komurTon: 512,
        aracSayisi: 12
    }
]


function Vectoral() {
    const [veri, setVeri] = useState(null)
    const onRegionClick = (e, code) => {
        let plate = plates[code];
        let dbdenGelenVeri = veriler.find(i => i.plaka == plate);
        if (!dbdenGelenVeri) {
            alert("Bu şehirde veri bulunmuyor..")
            setVeri(null)
            return;
        }
        setVeri(dbdenGelenVeri);
        console.log(dbdenGelenVeri);
    }

    return (
        <>
            <VectorMap onRegionClick={onRegionClick}
                className='vmap'
                map={trMill}>
            </VectorMap>
            {veri && <table className='table table-striped'>
                <thead>
                    <td>Plaka</td>
                    <td>Komur Ton</td>
                    <td>Araç Sayısı</td>
                </thead>
                <tbody>
                    <tr>
                        <td>{veri.plaka}</td>
                        <td>{veri.komurTon}</td>
                        <td>{veri.aracSayisi}</td>
                    </tr>
                </tbody>
            </table>}
        </>

    )
}

export default Vectoral
// npm install @react-jvectormap/core jquery
// npm install @react-jvectormap/turkey