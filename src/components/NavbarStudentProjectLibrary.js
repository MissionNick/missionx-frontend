import styles from "./styles/StudentProjectLibrary.module.css";
import maoriFlag from "./images/Maori_flag.png";
import nzFlag from "./images/NZ_Flag.png";
import logosrc from "./images/Star_Logo_07-2.png";
import { Link } from "react-router-dom";

// Using Const here until user state /session details are implemented.
const userImage = "./images/sampleUserImage.png";
const userName = "Sample User".toUpperCase();  

function Navbar() {
    const { navBar, logo, navMenu, lang, user, navLeft, navRight} = styles;
    return (
        <div id={navBar}>
            <div id={navLeft}>
                <img id={logo} src={logosrc} alt="LEVEL UP WORKS"></img>
                </div>

            <div id={navMenu}>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/">HOME</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/">PROJECTS</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/">TEACHERS</Link>
                </div>
                
            <div id={navRight}>
                <div id={lang} >
                    LANG <img style={{paddingLeft:'3%'}}src={nzFlag} alt="English" />
                    <img style={{ paddingLeft:'3%'}} src={maoriFlag} alt="Maori" />
                    </div>
                <div id={user}>
                    <img style={{verticalAlign:'middle',paddingRight:'3%'}} src={require(`${userImage}`)} alt="" />
                    {userName}
                    </div>
                </div>
        </div>
    )
}

export default Navbar;