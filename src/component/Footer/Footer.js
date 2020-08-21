import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import './Footer.css'
import instagram from '../Image/IG.png'
import linked from '../Image/linkedin.png'
import github from '../Image/github.png'
import wa from '../Image/WA.png'
const Footer = (props) => {
    return (
      <div>
        <Container className="find">
          <h2 className="display-6">WHERE YOU CAN FIND ME ?</h2>
        </Container>
        <div className="Contact">
          <Row>
            <Col>
              <a href="https://www.instagram.com/taufiq_hakim23/?hl=en">
                <img src={instagram} className="icon" />
              </a>
            </Col>
            <Col>
              <a href="https://github.com/taufik230301/">
                <img src={github} className="icon" />
              </a>
            </Col>
            <Col>
              <a href="https://wa.me/082176350289">
                <img src={wa} className="icon" />
              </a>
            </Col>
            <Col>
              <img src={linked} className="icon" />
            </Col>
          </Row>
        </div>
      </div>
    );
}

export default Footer;