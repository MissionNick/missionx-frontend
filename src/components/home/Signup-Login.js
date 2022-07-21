import styles from "../styles/home/signup.module.css";
import studentImage from "../../assets/images/home/StudentLogIn.png";
import teacherImage from "../../assets/images/home/TeachLogIn.png";
import { useState } from "react";
import axios from "axios";
import { Fallback } from "../shared/Fallback";

export default function SignupLogin({
  isSignUp,
  setIsSignUp,
  setIsModalOpen,
  setisLoggedIn,
}) {
  const [stuName, setStuName] = useState("");
  const [stuEmail, setStuEmail] = useState("");
  const [stuPass, setStuPass] = useState("");
  const [stuConfirm, setStuConfirm] = useState("");

  const [teachName, setTeachName] = useState("");
  const [teachEmail, setTeachEmail] = useState("");
  const [teachPass, setTeachPass] = useState("");
  const [teachConfirm, setTeachConfirm] = useState("");

  const [errMessageStu, setErrMessageStu] = useState("");
  const [errMessageTeach, setErrMessageTeach] = useState("");
  const [errIsVisible, setErrIsVisible] = useState(false);

  function displayError(msg, isStudent) {
    if (isStudent) {
      setErrMessageStu(msg);
      setErrIsVisible(true);
      setTimeout(() => {
        setErrIsVisible(false);
        setErrMessageStu("");
      }, 3000);
    } else {
      setErrMessageTeach(msg);
      setErrIsVisible(true);
      setTimeout(() => {
        setErrIsVisible(false);
        setErrMessageTeach("");
      }, 3000);
    }
  }

  function clearField() {
    // setStuName("");
    // setStuEmail("");
    setStuPass("");
    setStuConfirm("");
    // setTeachName("");
    // setTeachEmail("");
    setTeachPass("");
    setTeachConfirm("");
  }

  function student() {
    if (isSignUp) {
      // console.log("Student sign up button", stuName, stuEmail, stuPass, stuConfirm);
      if ((stuPass === stuConfirm) & /\S{8,}/g.test(stuPass)) {
        axios
          .post(
            "http://localhost:4000/signup/student",
            {
              name: stuName,
              email: stuEmail,
              password: stuPass,
              confirm: stuConfirm,
            },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res);
            clearField();
          })
          .catch((err) => {
            console.log(err.response.data);
            if (
              /Duplicate entry .* for key 'email'/gm.test(err.response.data)
            ) {
              displayError("Email already taken", true);
            } else {
              displayError("Signup Failed");
            }
            clearField();
          });
      } else {
        if (stuPass === stuConfirm) {
          displayError(
            "Password Must have 8 characters and no whitespace",
            true
          );
        } else {
          displayError("Passwords Don't Match", true);
        }
      }
    } else {
      // console.log("Student login button", stuEmail, stuPass);
      axios
        .post(
          "http://localhost:4000/login/student",
          {
            email: stuEmail,
            password: stuPass,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res);
          clearField();
          setisLoggedIn(true);
          setIsModalOpen(false);
        })
        .catch((err) => {
          // console.log(err.response.data);
          displayError(err.response.data, true);
          clearField();
        });
    }
  }

  function teacher() {
    if (isSignUp) {
      // console.log("Teacher sign up button", teachName, teachEmail, teachPass, teachConfirm);
      if ((teachPass === teachConfirm) & /\S{8,}/g.test(teachPass)) {
        axios
          .post(
            "http://localhost:4000/signup/teacher",
            {
              name: teachName,
              email: teachEmail,
              password: teachPass,
              confirm: teachConfirm,
            },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res);
            clearField();
          })
          .catch((err) => {
            console.log(err.response.data);
            if (
              /Duplicate entry .* for key 'email'/gm.test(err.response.data)
            ) {
              displayError("Email already taken");
            } else {
              displayError("Signup Failed");
            }
            clearField();
          });
      } else {
        if (teachPass === teachConfirm) {
          displayError(
            "Password Must have 8 characters and no whitespace",
            true
          );
        } else {
          displayError("Passwords Don't Match");
        }
      }
    } else {
      // console.log("Teacher login button", teachEmail, teachPass);
      axios
        .post(
          "http://localhost:4000/login/teacher",
          {
            email: teachEmail,
            password: teachPass,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res);
          clearField();
          setisLoggedIn(true);
          setIsModalOpen(false);
        })
        .catch((err) => {
          // console.log(err);
          displayError(err.response.data);
          clearField();
        });
    }
  }

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
                  onClick={() => {
                    setIsSignUp(false);
                    clearField();
                  }}
                  className={isSignUp ? styles.LogIN : styles.LogINActive}
                >
                  LOG IN
                </button>
                <button
                  onClick={() => {
                    setIsSignUp(true);
                    clearField();
                  }}
                  className={isSignUp ? styles.SignUPActive : styles.SignUP}
                >
                  SIGN UP
                </button>
              </div>
              <div className={styles.inputFields}>
                {isSignUp && (
                  <input
                    onChange={(e) => {
                      setStuName(e.target.value);
                    }}
                    placeholder="Full Name"
                    className={styles.field}
                    value={stuName}
                  />
                )}
                <input
                  onChange={(e) => {
                    setStuEmail(e.target.value);
                  }}
                  placeholder="Email Address"
                  className={styles.field}
                  value={stuEmail}
                />
                <input
                  onChange={(e) => {
                    setStuPass(e.target.value);
                  }}
                  type="password"
                  placeholder="Password"
                  className={styles.field}
                  value={stuPass}
                />
                {isSignUp && (
                  <input
                    onChange={(e) => {
                      setStuConfirm(e.target.value);
                    }}
                    type="password"
                    placeholder="Confirm Password"
                    className={styles.field}
                    value={stuConfirm}
                  />
                )}
              </div>
              <button onClick={() => student()} className={styles.submitButton}>
                {isSignUp ? "SIGN UP" : "LOG IN"}
              </button>
              <div
                style={
                  errIsVisible ? { display: "block" } : { display: "none" }
                }
                className={styles.errMsg}
              >
                {errMessageStu}
              </div>
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
                  onClick={() => {
                    setIsSignUp(false);
                    clearField();
                  }}
                  className={isSignUp ? styles.LogIN : styles.LogINActive}
                >
                  LOG IN
                </button>
                <button
                  onClick={() => {
                    setIsSignUp(true);
                    clearField();
                  }}
                  className={isSignUp ? styles.SignUPActive : styles.SignUP}
                >
                  SIGN UP
                </button>
              </div>
              <div className={styles.inputFields}>
                {isSignUp && (
                  <input
                    onChange={(e) => {
                      setTeachName(e.target.value);
                    }}
                    placeholder="Full Name"
                    className={styles.field}
                    value={teachName}
                  />
                )}
                <input
                  onChange={(e) => {
                    setTeachEmail(e.target.value);
                  }}
                  placeholder="Email Address"
                  className={styles.field}
                  value={teachEmail}
                />
                <input
                  onChange={(e) => {
                    setTeachPass(e.target.value);
                  }}
                  type="password"
                  placeholder="Password"
                  className={styles.field}
                  value={teachPass}
                />
                {isSignUp && (
                  <input
                    onChange={(e) => {
                      setTeachConfirm(e.target.value);
                    }}
                    type="password"
                    placeholder="Confirm Password"
                    className={styles.field}
                    value={teachConfirm}
                  />
                )}
              </div>
              <button onClick={() => teacher()} className={styles.submitButton}>
                {isSignUp ? "SIGN UP" : "LOG IN"}
              </button>
              <div
                style={
                  errIsVisible ? { display: "block" } : { display: "none" }
                }
                className={styles.errMsg}
              >
                {errMessageTeach}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
