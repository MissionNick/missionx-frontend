import progress from "../../assets/images/sidebar/progresslight.png";
import submit from "../../assets/images/sidebar/submit.png";
import library from "../../assets/images/sidebar/library.png";
import user from "../../assets/images/sidebar/userIcon.png";
import settings from "../../assets/images/sidebar/settingsIcon.png";
import signout from "../../assets/images/sidebar/signoutIcon.png";
import graduate from "../../assets/images/sidebar/graduateIcon.png";
import help from "../../assets/images/sidebar/helpIcon.png";
import styles from "../styles/sidebar/Sidebar.module.css";

export const SideBarData = [
  {
    title: "Progress Tracker",
    path: "/progress-tracker",
    icon: <img src={progress} alt="icon" />,
    // cName: `${styles.sidebar_nav_text}`,
    cName: "sidebar_nav_text",
  },
  {
    title: "Student Profiles",
    path: "/student-profiles",
    icon: <img src={graduate} alt="icon" />,
    // cName: `${styles.sidebar_nav_text}`,
    cName: "sidebar_nav_text",
  },
  {
    title: "Help Requests",
    path: "/help-requests",
    icon: <img src={help} alt="icon" />,
    // cName: `${styles.sidebar_nav_text}`,
    cName: "sidebar_nav_text",
  },
  {
    title: "Project Submissions",
    path: "/project-submissions",
    icon: <img src={submit} alt="icon" />,
    // cName: `${styles.sidebar_nav_text}`,
    cName: "sidebar_nav_text",
  },
  {
    title: "Project Library",
    path: "/project-library",
    icon: <img src={library} alt="icon" />,
    // cName: `${styles.sidebar_nav_text}`,
    cName: "sidebar_nav_text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <img src={user} alt="icon" />,
    cName: `${styles.sidebar_nav_text_bottom}`,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <img src={settings} alt="icon" />,
    cName: `${styles.sidebar_nav_text_bottom}`,
  },
  {
    title: "Log out",
    path: "/log-out",
    icon: <img src={signout} alt="icon" />,
    cName: `${styles.sidebar_nav_text_bottom}`,
  },
];
