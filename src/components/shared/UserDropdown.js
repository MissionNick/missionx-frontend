// import userCircle from "../../assets/images/User_circle.png";
import { useState } from "react";
import styles from "../styles/UserDropdown.module.css";
import axios from "axios";
import userCircle from "../../assets/images/User_circle.png";

export default function UserDropdown({
  usersName,
  usersPic,
  setisLoggedIn,
  setIsAuthenticated,
  setusersName,
  setusersPic,
}) {
  const [isDropOpen, setisDropOpen] = useState(false);

  const dropdownClick = (isDropOpen) => {
    setisDropOpen(!isDropOpen);
  };
  return (
    <div id={styles.container}>
      <div id={styles.dropdownButton} onClick={() => dropdownClick(isDropOpen)}>
        <img id={styles.userProfilePic} src={usersPic} alt="User pic"></img>
        <div style={{ paddingLeft: "5%", marginRight: "20%" }}>{usersName}</div>
      </div>
      {isDropOpen && (
        <div id={styles.dropdownMenuHolder}>
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
                  setusersName("");
                  setusersPic(userCircle);
                  setisLoggedIn(false);
                  setIsAuthenticated(false);
                  // setisDropOpen{ false };
                });
            }}
          >
            Log out
          </div>
          </div>
          </div>
      )}
    </div>
  );
}
