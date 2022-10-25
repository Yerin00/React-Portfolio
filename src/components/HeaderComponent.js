import React, { useState } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';



function HeaderComponent() {
    const [isNavOpen, setisNavOpen] = useState(false)
    const toggleNav = () => {
        setisNavOpen(!isNavOpen)
    }

    return (
        <React.Fragment>
            <Navbar expand="md" >
                <div className="container">
                    <NavbarToggler onClick={toggleNav}/>
                    <NavbarBrand className="mr-auto p-3" href="/">
                        {/* <img src="" height="30" width="41"
                            alt="ChoiYerin" /> */}<strong>Choi Yerin</strong>
                    </NavbarBrand>

                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            {/* Home */}
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                        {/* <span className="fa fa-home fa-lg"></span> Home */}Home
                                </NavLink>
                            </NavItem>
                            {/* Info */}
                            <NavItem>
                                <NavLink className="nav-link" to="/info">
                                        {/* <span className="fa fa-home fa-lg"></span> Home */}Info
                                </NavLink>
                            </NavItem>
                            {/* Contact Us */}
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                        {/* <span className="fa fa-home fa-lg"></span> Home */}Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>
    )
}

export default HeaderComponent