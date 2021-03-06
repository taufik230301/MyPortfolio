import React from 'react';
import './Listartikel.css';
import {NavLink} from 'reactstrap';

class List extends React.Component{
    render(){
        return (
            <div className="Container1">
             <h1>React JS</h1>
             <NavLink href="https://www.youtube.com/watch?v=e-GuPT8nYc4">
                 <p className="list">Stateless dan StateFull Component pada ReactJS</p>
            </NavLink>
            <NavLink href="https://www.youtube.com/watch?v=8vLpcVfIScg&t=17s">
                 <p className="list">Membuat Komponen yang dinamis Menggunakan PROPS pada ReactJS</p>
            </NavLink>

            <h1>Dart</h1>
            <NavLink href="https://www.youtube.com/watch?v=f0DaP-Xz92U">
                 <p className="list">Kenalan dengan bahasa DART yang super kece dari google (Hello World)</p>
            </NavLink>
            <NavLink href="https://youtu.be/VYXKBrNsvhc">
                 <p className="list">Yok Mengenal Lebih Dalam Macam - Macam Variable dan Tipe Data dalam Dart</p>
            </NavLink>
            <NavLink href="https://www.youtube.com/watch?v=AA-3HqhDLUc&t=326s">
                 <p className="list">Final dan Const itu Berbeda loh!</p>
            </NavLink>
            <NavLink href="https://www.youtube.com/watch?v=IHsPYHNkWCg">
                 <p className="list">Operator pada DART</p>
            </NavLink>
            <NavLink href="https://www.youtube.com/watch?v=rKWnMKDTRB4">
                 <p className="list">Operator Aritmatika pada DART</p>
            </NavLink>
            <NavLink href="https://www.youtube.com/watch?v=io9UWgntGgo">
                 <p className="list">Operator Relasional dan Perbandingan pada DART</p>
            </NavLink>
            <NavLink href="https://www.youtube.com/watch?v=nTXVtAm544g">
                 <p className="list">Operator Bitwise pada DART</p>
            </NavLink>
            <NavLink href="https://www.youtube.com/watch?v=n_ZRt2oWfMM&t=1s">
                 <p className="list">Operator Type Test pada DART</p>
            </NavLink>
            <NavLink href="https://www.youtube.com/watch?v=vDtNSIQSw8U">
                 <p className="list">Operator Logical pada DART</p>
            </NavLink>

            <h1>Sharing Session</h1>
            <NavLink href="https://www.youtube.com/watch?v=n9x0MDZ72bc">
                 <p className="list">Introduction to Basic React JS Powered By Palembang Digital Community</p>
            </NavLink>
            </div>
        )
    }
}

export default List;