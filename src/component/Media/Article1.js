import React from 'react';
import { Media, Button } from 'reactstrap';
import './Article1.css';
import calculator from '../Image/Calculator.jpg'
import patal from '../Image/logo.png'
import Fade from 'react-reveal/Fade'
import Dicoding from '../Image/dicoding.png'

const Article1 = () => {
    return (
        <div>
            <Fade>
            <Media>
                <Media left top href="#">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" src={calculator} />
                </Media>
                <Media body>
                    <Media heading>
                        Project membuat Aplikasi Kalkulator
          </Media>
          Sebelum masuk ke dunia software developer, khususnya website frontend saya mempelajari hal dasar yang harus dipahami yaitu HTML, CSS dan Javascript, hal tersebut adalah fundamental bagi yang ingin terjun kedunia Web Front-End Developer.
        </Media>
            </Media>
            <Media className="mt-1">
                <Media left middle href="#">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" src={patal} />
                </Media>
                <Media body>
                    <Media heading>
                        Website Komunitas Palembang Digital
          </Media>
            Komunitas Palembang Digital merupakan tempat berkumpul para penggiat IT dari seluruh kalangan mulai dari siswa, mahasiswa, hingga Pekerja untuk menbangun ekosistem IT di daerah Sumatera Selatan.
                </Media>
            </Media>
            <Media className="mt-1">
                <Media left middle href="#">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" src={patal} />
                </Media>
                <Media body>
                    <Media heading>
                        Mock Up Aplikasi PACAK IT Komunitas Palembang Digital
          </Media>
            Hasil karya mengikuti lomba hackaton pada HUT RI Ke - 75 yang diselengarakan Komunitas Palembang Digital.
                </Media>
            </Media>
            <Media className="mt-1">
                <Media left middle href="#">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" src={Dicoding} />
                </Media>
                <Media body>
                    <Media heading>
                       Tugas Akhir Dasar - dasar pemrograman Web Dicoding
          </Media>
            Mengimplementasikan penerapan dasar - dasar pembuatan web site, dan membuat project web portfolio menggunakan HTML, CSS dan Javascript.
                </Media>
            </Media>
            </Fade>
        </div>
    );
};

export default Article1;