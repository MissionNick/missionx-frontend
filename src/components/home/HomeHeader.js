import styles from "../styles/home/HomeHeader.module.css"
import logo from "../images/Logo.png";
import nzFlag from "../images/NZ_flag.png";
import maoriFlag from "../images/Maori_flag.png";
import userCircle from "../images/User_circle.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id={styles.header}>
      <div id={styles.logo}>
        <img src={logo} alt="LevelUp Works Logo" />
      </div>
      <div id={styles.headerNav}>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">HOME</Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/StudentProjectLibrary">PROJECTS</Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/MockTeacher">TEACHERS</Link>
      </div>
      <div id={styles.loginLanguage}>
        <div id={styles.holder}>
          <div id={styles.language}>
            LANG <img className={styles.flag} src={nzFlag} alt="NZ" />{" "}
            <img className={styles.flag} src={maoriFlag} alt="Maori" />
          </div>
          <div id={styles.login}>
            <img
              style={{ padding: "0px 5px" }}
              src={userCircle}
              alt="User Icon"
            />
            <div>REGISTER | LOGIN</div>
          </div>
        </div>
      </div>
    </div>
  );
}
