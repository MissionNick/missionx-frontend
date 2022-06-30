import styles from "../styles/sidebar/Sidebar.module.css";
import { SideBarData } from "../data/SideBarNavData";
import { Link } from "react-router-dom";
import placeHolder from "../../assets/images/sidebar/placeholder.png";
import sidebarClose from "../../assets/images/sidebar/sidebarIcon.png";
import sidebarClosed from "../../assets/images/sidebar/sidebarIconRight.png";
import { useState } from "react";

export default function TeacherSidebar() {
  const [sidebar, setSidebar] = useState(true);
  const toggleSidebar = () => setSidebar(!sidebar);
  return (
    <div className={styles.page_bg}>
      <nav
        className={
          sidebar ? styles.sidebar_nav_menu : styles.sidebar_nav_menu_closed
        }
      >
        <div
          className={sidebar ? styles.close_sidebar : styles.closed_sidebar}
          onClick={toggleSidebar}
        >
          <img
            src={sidebar ? sidebarClose : sidebarClosed}
            alt="placeholder"
            className={styles.sidebar_close_icon}
          />
        </div>
        <ul className={styles.sidebar_nav_menu_items}>
          <div className={styles.profile}>
            <img src={placeHolder} alt="placeholder" />
          </div>
          {SideBarData.map((item, index) => {
            const openedSidebar =
              item.cName === "sidebar_nav_text"
                ? styles.sidebar_nav_text
                : styles.sidebar_nav_text_bottom;
            const closedSidebar =
              item.cName === "sidebar_nav_text"
                ? styles.sidebar_nav_text_closed
                : styles.sidebar_nav_text_bottom_closed;
            return (
              <li
                key={index}
                className={sidebar ? openedSidebar : closedSidebar}
              >
                <Link
                  to={item.path}
                  id={
                    window.location.pathname === item.path ? styles.active : ""
                  }
                >
                  <div
                    className={
                      sidebar ? styles.text_icon : styles.text_icon_closed
                    }
                  >
                    {item.icon}
                  </div>
                  <div
                    className={
                      sidebar ? styles.text_title : styles.text_title_closed
                    }
                  >
                    {item.title}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
