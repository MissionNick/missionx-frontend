import styles from "../styles/sidebar/TeacherSidebar.module.css";
import { Link } from "react-router-dom";
import placeHolder from "../../assets/images/sidebar/placeholder.png";
import sidebarClose from "../../assets/images/sidebar/sidebarIcon.png";
import sidebarClosed from "../../assets/images/sidebar/sidebarIconRight.png";
import { useState } from "react";
import progress from "../../assets/images/sidebar/progresslight.png";
import submit from "../../assets/images/sidebar/submit.png";
import library from "../../assets/images/sidebar/library.png";
import user from "../../assets/images/sidebar/userIcon.png";
import settings from "../../assets/images/sidebar/settingsIcon.png";
import signout from "../../assets/images/sidebar/signoutIcon.png";
import graduate from "../../assets/images/sidebar/graduateIcon.png";
import help from "../../assets/images/sidebar/helpIcon.png";

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
        <div className={styles.profile}>
          <img src={placeHolder} alt="placeholder" />
        </div>
        <ul className={styles.sidebar_nav_menu_items}>
          <div className={styles.sidebar_top}>
            <li className={styles.sidebar_nav_text}>
              <Link
                to="/progress-tracker"
                id={
                  window.location.pathname === "/progress-tracker"
                    ? styles.active
                    : null
                }
              >
                <img
                  src={progress}
                  alt="nav-icon"
                  className={
                    sidebar ? styles.text_icon : styles.text_icon_closed
                  }
                />
                <div
                  className={
                    sidebar ? styles.text_title : styles.text_title_closed
                  }
                >
                  Progress Tracker
                </div>
              </Link>
            </li>
            <li className={styles.sidebar_nav_text}>
              <Link
                to="/student-profiles"
                id={
                  window.location.pathname === "/student-profiles"
                    ? styles.active
                    : null
                }
              >
                <img
                  src={graduate}
                  alt="nav-icon"
                  className={
                    sidebar ? styles.text_icon : styles.text_icon_closed
                  }
                />
                <div
                  className={
                    sidebar ? styles.text_title : styles.text_title_closed
                  }
                >
                  Student Profiles
                </div>
              </Link>
            </li>
            <li className={styles.sidebar_nav_text}>
              <Link
                to="/help-requests"
                id={
                  window.location.pathname === "/help-requests"
                    ? styles.active
                    : null
                }
              >
                <img
                  src={help}
                  alt="nav-icon"
                  className={
                    sidebar ? styles.text_icon : styles.text_icon_closed
                  }
                />
                <div
                  className={
                    sidebar ? styles.text_title : styles.text_title_closed
                  }
                >
                  Help Requests
                </div>
              </Link>
            </li>
            <li className={styles.sidebar_nav_text}>
              <Link
                to="/project-submissions"
                id={
                  window.location.pathname === "/project-submissions"
                    ? styles.active
                    : null
                }
              >
                <img
                  src={submit}
                  alt="nav-icon"
                  className={
                    sidebar ? styles.text_icon : styles.text_icon_closed
                  }
                />
                <div
                  className={
                    sidebar ? styles.text_title : styles.text_title_closed
                  }
                >
                  Project Submissions
                </div>
              </Link>
            </li>
            <li className={styles.sidebar_nav_text}>
              <Link
                to="/project-library"
                id={
                  window.location.pathname === "/project-library"
                    ? styles.active
                    : null
                }
              >
                <img
                  src={library}
                  alt="nav-icon"
                  className={
                    sidebar ? styles.text_icon : styles.text_icon_closed
                  }
                />
                <div
                  className={
                    sidebar ? styles.text_title : styles.text_title_closed
                  }
                >
                  Project Library
                </div>
              </Link>
            </li>
          </div>

          <div className={styles.sidebar_bottom}>
            <li
              className={
                sidebar
                  ? styles.sidebar_nav_text_bottom
                  : styles.sidebar_nav_text_bottom_closed
              }
            >
              <Link
                to="/profile"
                id={
                  window.location.pathname === "/profile" ? styles.active : null
                }
              >
                <div
                  className={
                    sidebar ? styles.bottom_items : styles.bottom_items_closed
                  }
                >
                  <img
                    src={user}
                    alt="nav-icon"
                    className={
                      sidebar ? styles.text_icon : styles.text_icon_closed
                    }
                  />
                  <div
                    className={
                      sidebar ? styles.text_title : styles.text_title_closed
                    }
                  >
                    Profile
                  </div>
                </div>
              </Link>
            </li>
            <li
              className={
                sidebar
                  ? styles.sidebar_nav_text_bottom
                  : styles.sidebar_nav_text_bottom_closed
              }
            >
              <Link
                to="/settings"
                id={
                  window.location.pathname === "/settings"
                    ? styles.active
                    : null
                }
              >
                <div
                  className={
                    sidebar ? styles.bottom_items : styles.bottom_items_closed
                  }
                >
                  <img
                    src={settings}
                    alt="nav-icon"
                    className={
                      sidebar ? styles.text_icon : styles.text_icon_closed
                    }
                  />
                  <div
                    className={
                      sidebar ? styles.text_title : styles.text_title_closed
                    }
                  >
                    Settings
                  </div>
                </div>
              </Link>
            </li>
            <li
              className={
                sidebar
                  ? styles.sidebar_nav_text_bottom
                  : styles.sidebar_nav_text_bottom_closed
              }
            >
              <Link
                to="/log-out"
                id={
                  window.location.pathname === "/log-out" ? styles.active : null
                }
              >
                <div
                  className={
                    sidebar ? styles.bottom_items : styles.bottom_items_closed
                  }
                >
                  <img
                    src={signout}
                    alt="nav-icon"
                    className={
                      sidebar ? styles.text_icon : styles.text_icon_closed
                    }
                  />
                  <div
                    className={
                      sidebar ? styles.text_title : styles.text_title_closed
                    }
                  >
                    Log out
                  </div>
                </div>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
