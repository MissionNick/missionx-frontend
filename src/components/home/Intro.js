import styles from "../styles/home/Intro.module.css";

export default function Intro() {
  return (
    <div id={styles.intro}>
      <div id={styles.introTitle}>
        Prepare young minds for a better
        <span id={styles.specialWord}> future.</span>
      </div>
      <div id={styles.introContent}>
        Let us help you advance students in Digital Technologies and other
        learning areas with our project-based learning programme.
      </div>
      <div id={styles.introButtons}>
        <button id={styles.learn}>LEARN MORE</button>
        <div id={styles.SignUp}>
          <button id={styles.SignUpButton}>
            SIGN UP
          </button>
          <div id={styles.TAndC}>
            *Basic subscription includes the first 15 projects free of charge.
          </div>
        </div>
      </div>
    </div>
  );
}
