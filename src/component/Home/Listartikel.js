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
            </div>
        )
    }
}

export default List;