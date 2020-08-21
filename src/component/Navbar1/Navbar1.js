import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './Navbar1.css'
const Navbar1 = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
          
            <Navbar light expand="md" dark>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                    <Nav className="mr-auto" navbar >
                        <NavItem>
                            <NavLink href="/" >Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Tulisan">Article</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarBrand>Welcome !</NavbarBrand>
                </Collapse>
            </Navbar>
        </div>
       
    );
}

export default Navbar1;