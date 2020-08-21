import React from 'react';
import './profile.css';

const profile = (props) => {
    return (
        <div className="flex">
            <div>
            <h1>EXPERIENCE</h1>
            <p>Humas Himpunan Mahasiswa Jurusan Teknik Komputer 2018 - 2020</p>
            <p>Sekertaris Bidang Kominfo Perhimpunan Mahasiswa Informatika dan Komputer Naisonal 2019 - 2021</p>
            <p>Web Front End Developer Palembang Digital Community 2020</p>
            </div>
            <div>
            <h1>ACHIEVEMENT</h1>
            <p>Juara 1 Lomba Menulis Artikel Pendidikan di Dinas Pendidikan OKI 2017</p>
            <p>Juara 2 Lomba Menulis Opini Lingkungan Hidup Universitas Pendidikan Indoensia 2018</p>
            <p>Juara 3 Lomba Menulis Opini Sampoerna Agro 2016</p>
            </div>
        </div>
    )
}

export default profile;