import styles from "../styles/home/HomeHeader.module.css"
import logo from "../../assets/images/Star_Logo_07-2.png";
import nzFlag from "../../assets/images/NZ_Flag.png";
import maoriFlag from "../../assets/images/Maori_flag.png";
import userCircle from "../../assets/images/User_circle.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id={styles.header}>
      <div id={styles.logo}>
        <img src={logo} alt="LevelUp Works Logo" />
      </div>
      <div id={styles.headerNav}>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">HOME</Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/StudentProjectLibrary">FEATURES</Link>
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
