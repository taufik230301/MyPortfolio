import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import './JumbotronStyle.css';
import logo from '../Image/Taufik.jpg';
import FadeIn from 'react-fade-in'
const Jumbotron1 = (props) => {
    return (
        <div className="Container">
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Hello Visitors</h1>
                    <h2 className="display-4">I'm Taufiiqulhakim</h2>
                    <p className="lead">Selamat datang di Web Profile Taufiiqulhakim.</p>
                </Container>
                <Button color="primary">Selengkapnya</Button>
            </Jumbotron>
            <div className="Photoprofile">
            <FadeIn delay="500" top>
            <img src={logo} className="img"/>
            </FadeIn>
            </div>
        </div>
        
    );
};

export default Jumbotron1;