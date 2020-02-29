import React from 'react';
import {
    Navbar,
    Button,
    NavbarGroup
} from '@blueprintjs/core';
import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faBriefcase, faAward, faSitemap, faFan } from '@fortawesome/free-solid-svg-icons'
import '../../../fonts/simply_rounded.ttf'

class AboutMe extends React.Component {
    render() {
        return (
            <div className="square_container">
                <div className="about_me" style={{ position:"relative",textAlign: "center", display: "inline-block", width: "35%", borderStyle: "", height: "100%" }} >
                    <div className="my_image" style={{
                        width: "245px",
                        height: "245px",
                        borderRadius: "50%",
                        backgroundSize: "cover",
                        backgroundPosition: "-7px -10px",
                        top: "18%",
                        left: "29%",
                        borderStyle: "solid",
                        borderWidth: "8px",
                        borderColor: "#fff",
                        position:"absolute"                    }}>
                    </div>
                </div>
                <div className="about_me" style={{ position:"relative",display: "inline-block", width: "55%", borderStyle: "", height: "100%" }}>
                    <div className="my_information" style={{ position:"absolute",top:"17%",marginLeft:"30px"}}>
                        <p style={{ color: "#fff",opacity:"70%" }}>Front-End developer</p>
                        <p style={{ color: "#fff",fontSize:"35px",marginTop:"0px",marginBottom:"0px",padding:"0px",fontWeight:"700" }}>Kevin Tirta</p>
                        <p style={{ color: "#fff", width: "500px" }}>
                        A self-motivated sofware engineer with huge knowledge and proficiency
                        in JavaScript, React.js, HTML, CSS, and desktop app development 
                        as well as strong skills and ability in writing clean and efficient code.sdklakjldsalkndnslklkns
                        </p>
                        <div className="info_button">
                            <Button style={{padding:"10px",backgroundColor:"#fff",borderStyle:"none", borderRadius:"12px",width:"100px",fontWeight:"375"}}>Download CV</Button>
                            <Button style={{padding:"10px",backgroundColor:"#fff",borderStyle:"none", borderRadius:"12px",width:"100px",fontWeight:"375"}}>Download CV</Button>
                            <Button style={{padding:"10px",backgroundColor:"#fff",borderStyle:"none", borderRadius:"12px",width:"90px",fontWeight:"375",borderColor:"#000066"}}>Contact Info</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;