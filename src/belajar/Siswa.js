import React, { Component } from 'react'

const siswa = [
    {
        nama: "jamal",
        umur: 20
    },
    {
        nama: "surti",
        umur: 18
    },
    {
        nama: "pegasus",
        umur: 19
    },
    {
        nama: "astra",
        umur: 21
    },
];

let avg_age = siswa.reduce((umur, siswas) => {
    return umur + siswas.umur
}, 0);

avg_age = Math.floor(avg_age / siswa.length);

export default class Siswa extends Component {

    render() {
        return (
            <div>
                <h2>Regular Map</h2>
                <ul>
                    {siswa.map((siswas, i) => (
                        <li>{i+1}. {siswas.nama} - {siswas.umur}</li>
                    ))}
                </ul>

                <h2>Filtering Map</h2>
                <ul>
                    {siswa
                    .filter((siswas) => siswas.umur >= 20)
                    .map((siswas, i) => (
                        <li>{i+1}. {siswas.nama} - {siswas.umur}</li>
                    ))}
                </ul>

                
                <h2>Average Umur = {avg_age}</h2>
            </div>
        )
    }
}
