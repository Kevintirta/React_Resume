import React from 'react';
import {
    Navbar,
    NavbarGroup,
    NavbarDivider,
    NavbarHeading,
    Button,
    Alignment
} from '@blueprintjs/core';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "hover-on";
import { Animated } from "react-animated-css";


class Header extends React.Component {
    render() {
        return (
            <Navbar className="Navbar" >
                <NavbarGroup className="NavbarGroup">
                    <Button style={{ marginRight: "40px" }} className="bob">
                        <div style={{ float: "left", marginRight: "3px" }}>Extracuricullar</div><FontAwesomeIcon icon={faChevronDown} />
                    </Button>
                    <Button className="bob">
                        {/* <FontAwesomeIcon icon={faAward} /> */}
                        <div style={{ float: "left", marginRight: "3px" }}>Projects</div><FontAwesomeIcon icon={faChevronDown} />
                    </Button>
                    <Button className="bob">
                        {/* <FontAwesomeIcon icon={faBriefcase} /> */}
                        <div style={{ float: "left", marginRight: "3px" }}>Experience</div><FontAwesomeIcon icon={faChevronDown} />
                    </Button>
                    <Button className="bob">
                        {/* <FontAwesomeIcon icon={faCode} /> */}
                        <div style={{ float: "left", marginRight: "3px" }}>Skills</div><FontAwesomeIcon icon={faChevronDown} />
                    </Button>
                    <Button className="bob">
                        {/* <FontAwesomeIcon icon={faUser} /> */}
                        <div style={{ float: "left", marginRight: "3px" }}>About Me</div><FontAwesomeIcon icon={faChevronDown} />
                    </Button>
                    <p className="Kevin_Logo"><strong>K</strong></p>
                    {/* <a className="btn"
                    // style={{ fontFamily: "Arial, Helvetica, sans-serif", opacity: "83%", fontSize: "17px", marginTop: "45px", marginLeft: "5px" }}
                    >
                        Kevin Tirta
                    </a> */}

                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                        <div>
                            hello world ;)
                        </div>
                    </Animated>
                </NavbarGroup>
            </Navbar>
        )
    }
}

export default Header;