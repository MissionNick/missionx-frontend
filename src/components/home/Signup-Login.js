import styles from "../styles/home/signup.module.css";
import studentImage from "../../assets/images/home/StudentLogIn.png";
import teacherImage from "../../assets/images/home/TeachLogIn.png";

export default function SignupLogin({ isSignUp, setIsSignUp, setIsModalOpen }) {
  return (
    <div>
      <div id={styles.modalOverlay}>
        <div id={styles.modalContent}>
          <div id={styles.modalLeft}>
            <div id={styles.placeHolder}>X</div>
            <div className={styles.section}>
              <img className={styles.images} src={studentImage} alt="Student" />
              <div className={styles.modalTitle}>Students</div>
              <div className={styles.signUpLoginBtns}>
                <button
                  onClick={() => setIsSignUp(false)}
                  className={isSignUp ? styles.LogIN : styles.LogINActive}
                >
                  LOG IN
                </button>
                <button
                  onClick={() => setIsSignUp(true)}
                  className={isSignUp ? styles.SignUPActive : styles.SignUP}
                >
                  SIGN UP
                </button>
              </div>
              <div className={styles.inputFields}>
                {isSignUp && (
                  <input placeholder="Full Name" className={styles.field} />
                )}
                <input placeholder="Email Address" className={styles.field} />
                <input placeholder="Password" className={styles.field} />
                {isSignUp && (
                  <input
                    placeholder="Confirm Password"
                    className={styles.field}
                  />
                )}
              </div>
              <button className={styles.submitButton}>SIGN UP</button>
            </div>
          </div>
          <div id={styles.modalRight}>
            <div id={styles.closeButton}>
              <span
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                X
              </span>
            </div>
            <div className={styles.section}>
              <img className={styles.images} src={teacherImage} alt="Teacher" />
              <div className={styles.modalTitle}>Teachers</div>
              <div className={styles.signUpLoginBtns}>
                <button
                  onClick={() => setIsSignUp(false)}
                  className={isSignUp ? styles.LogIN : styles.LogINActive}
                >
                  LOG IN
                </button>
                <button
                  onClick={() => setIsSignUp(true)}
                  className={isSignUp ? styles.SignUPActive : styles.SignUP}
                >
                  SIGN UP
                </button>
              </div>
              <div className={styles.inputFields}>
                {isSignUp && (
                  <input placeholder="Full Name" className={styles.field} />
                )}
                <input placeholder="Email Address" className={styles.field} />
                <input placeholder="Password" className={styles.field} />
                {isSignUp && (
                  <input
                    placeholder="Confirm Password"
                    className={styles.field}
                  />
                )}
              </div>
              <button className={styles.submitButton}>{isSignUp? 'SIGN UP' : 'LOG IN'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
