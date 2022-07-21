import userCircle from "../../assets/images/User_circle.png";
import { useState } from "react";
import styles from "../styles/UserDropdown.module.css";
import axios from "axios";

export default function UserDropdown({ userID, userPic, setisLoggedIn}) {
  const [isDropOpen, setisDropOpen] = useState(false);

  const dropdownClick = (isDropOpen) => {
    setisDropOpen(!isDropOpen);
  };
  return (
    <div id={styles.container}>
      <div id={styles.dropdownButton} onClick={() => dropdownClick(isDropOpen)}>
        <img src={userCircle} alt="User pic"></img>
        <div style={{ "padding-left": "5%" }}>{userID}</div>
      </div>
      {isDropOpen && (
        <div id={styles.dropdownMenu}>
          <div className={styles.dropdownItems}>My Profile</div>
          <div className={styles.dropdownItems}>Settings</div>
          <div
            className={styles.dropdownItems}
            onClick={() => {
              axios
                .post(
                  "http://localhost:4000/logOut",
                  {},
                  { withCredentials: true }
                )
                .then((res) => {
                    console.log(res);
                    setisLoggedIn(false);
                    // setisDropOpen{ false };
                });
            }}
          >
            Log out
          </div>
        </div>
      )}
    </div>
  );
}
