import styles from "../styles/ProgressTracker/ProgressTracker.module.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
export default function StudentProgress() {
  //   const [studentList, setStudentList] = useState([]);

  //   useEffect(() => {
  //     axios.get("http://localhost:4000/api/students").then((response) => {
  //       setStudentList(response.data);
  //     });
  //   }, []);

  return (
    <div className={styles.progressContainer}>
      {/* {studentList.map((val) => {
        return (
          <>
            <div className={styles.studentInfo}>
              <h2 className={styles.studentName}>{val.Name}</h2>
              <p className={styles.studentProgress}>
                {val.ProjectID}/15 Projects Completed
              </p>
            </div>
            <div className={styles.progressGrid}> </div>
          </>
        );
      })} */}
    </div>
  );
}
