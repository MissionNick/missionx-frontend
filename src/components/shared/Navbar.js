import styles from "../styles/Navbar.module.css";
import maoriFlag from "../../assets/images/Maori_flag.png";
import nzFlag from "../../assets/images/NZ_Flag.png";
import logosrc from "../../assets/images/Star_Logo_07-2.png";
import { Link } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from './Fallback'
import { errorHandler } from './ErrorHandler'

// Using Const here until user state /session details are implemented.

const userImage = require("../../assets/images/sampleUserImage.png");
const userName = "Sample User".toUpperCase();  

console.log("Component Load : Navbar")




function Navbar() {
    
    const { navBar, logo, navMenu, lang, user, navLeft, navRight } = styles;
    
    return (
            <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
                <div id={navBar}>
                    <div id={navLeft}>
                        <img id={logo} src={logosrc} alt="LEVEL UP WORKS"></img>
                    </div>

                    <div id={navMenu}>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/">HOME</Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/StudentProjectLibrary">PROJECTS</Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/MockTeacher">TEACHERS</Link>
                    </div>
                
                    <div id={navRight}>
                        <div id={lang} >
                            LANG <img style={{ paddingLeft: '3%' }} src={nzFlag} alt="English" />
                            <img style={{ paddingLeft: '3%' }} src={maoriFlag} alt="Maori" />
                        </div>
                        <div id={user}>
                            <img style={{ verticalAlign: 'middle', paddingRight: '3%' }}  src={userImage} alt="user" />
                            {userName}
                        </div>
                    </div>
                </div>
            </ErrorBoundary>
        )
    } 

export default Navbar;