import React from 'react';
import { Jumbotron, Container, Button, Form } from 'reactstrap';
import './JumbotronStyle.css';
import logo from '../Image/Taufik.jpg';
import FadeIn from 'react-fade-in';
import {Link, animateScroll as scroll} from 'react-scroll';
const Jumbotron1 = (props) => {
    return (
        <div className="Container">
            <Jumbotron fluid>
                <Container fluid>
                    <h2 className="display-3">Hello Visitors</h2>
                    <h2 className="display-2">I'm Taufik</h2>
                    <p className="lead">Welcome to my Web Profile.</p>
                    <p>im Computer Engineering Student at State Polytechnic of Sriwijaya</p>
                    <p> I learn a lot about Software and Hardware Development</p>
                </Container>
                <Link  activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}>
                <Button color="primary">What i've Explored</Button>
                </Link>
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