import styles from "../styles/ProgressTracker/ProgressTracker.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
export default function StudentProgress() {
  const [progressList, setProgressList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/progress").then((response) => {
      setProgressList(response.data);
    });
  }, []);

  return (
    <>
      {progressList.map((val) => {
        return (
          <div className={styles.progressContainer}>
            <div className={styles.progressContainerLeft}>
              <div className={styles.studentInfo}>
                <h2 className={styles.studentName}>{val.Name}</h2>
                <p className={styles.studentProgress}>
                  {val.Total}/15 Projects Completed
                </p>
              </div>
            </div>
            <div className={styles.progressContainerRight}>
              <p className={styles.progressBtn}>1</p>
              <p className={styles.progressBtn}>2</p>
              <p className={styles.progressBtn}>3</p>
              <p className={styles.progressBtn}>4</p>
              <p className={styles.progressBtn}>5</p>
              <p className={styles.progressBtn}>6</p>
              <p className={styles.progressBtn}>7</p>
              <p className={styles.progressBtn}>8</p>
              <p className={styles.progressBtn}>9</p>
              <p className={styles.progressBtn}>10</p>
              <p className={styles.progressBtn}>11</p>
              <p className={styles.progressBtn}>12</p>
              <p className={styles.progressBtn}>13</p>
              <p className={styles.progressBtn}>14</p>
              <p className={styles.progressBtn}>15</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
