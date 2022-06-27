import styles from "../styles/home/HomeSection5.module.css";
import teacher from "../images/home/Teacher.png";

export default function HomeSection5() {
  return (
    <div id={styles.sectionFive}>
      <div id={styles.sectionFiveLeft}>
        <img id={styles.teacherimg} src={teacher} alt="teacher" />
      </div>
      <div id={styles.sectionFiveRight}>
        <div id={styles.sectionFiveTitle}>What are you waiting for?</div>
        <div id={styles.sectionFiveSubtitle}>
          Start teaching Digital Technologies today.
        </div>
        <div id={styles.sectionFiveInfo}>
          If you need more information, we are happy to answer any questions you
          may have.
        </div>
        <div id={styles.sectionFiveButtonHolder}>
          <button className={styles.sectionFiveButtons} id={styles.enquire}>
            ENQUIRE NOW
          </button>
          <button
            className={styles.sectionFiveButtons}
            id={styles.sectionFiveSignup}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}
