import React from 'react';
import './Listartikel.css';
import {NavLink} from 'reactstrap';

class List extends React.Component{
    render(){
        return (
            <div className="Container1">
             <h1>2020</h1>
             <NavLink href="https://www.youtube.com/watch?v=e-GuPT8nYc4">
                 <p className="list">Stateless dan StateFull Component pada ReactJS</p>
            </NavLink>
            </div>
        )
    }
}

export default List;