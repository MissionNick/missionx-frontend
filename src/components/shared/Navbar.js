import styles from "../styles/Navbar.module.css"
import logo from "../../assets/images/Star_Logo_07-2.png";
import nzFlag from "../../assets/images/NZ_Flag.png";
import maoriFlag from "../../assets/images/Maori_flag.png";
import userCircle from "../../assets/images/User_circle.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header({ setIsModalOpen }) {
  const [extendNav, setExtendNav] = useState(false);
  return (
    <div id={styles.headerContainer}>
      <div id={styles.headerNormal}>
        <div id={styles.logo}>
          <img src={logo} alt="LevelUp Works Logo" />
        </div>
        <div id={styles.headerNav}>
          <Link
            id={styles.headerNavLinks}
            style={{ textDecoration: "none", color: "white" }}
            to="/"
          >
            HOME
          </Link>
          <Link
            id={styles.headerNavLinks}
            style={{ textDecoration: "none", color: "white" }}
            to="/"
          >
            FEATURES
          </Link>
          <Link
            id={styles.headerNavLinks}
            style={{ textDecoration: "none", color: "white" }}
            to="/Teacher"
          >
            TEACHERS
          </Link>
          <div
            id={styles.dropDownButton}
            onClick={() => setExtendNav(!extendNav)}
          >
            {extendNav ? <>&#10005;</> : <>&#8801;</>}
          </div>
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
              <div
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                REGISTER | LOGIN
              </div>
            </div>
          </div>
        </div>
      </div>
      {extendNav && (
        <div id={styles.headerDropDown}>
          <Link
            style={{ textDecoration: "none", color: "white", padding: "5px" }}
            to="/"
          >
            HOME
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white", padding: "5px" }}
            to="/"
          >
            FEATURES
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white", padding: "5px" }}
            to="/"
          >
            TEACHERS
          </Link>
        </div>
      )}
    </div>
  );
}
