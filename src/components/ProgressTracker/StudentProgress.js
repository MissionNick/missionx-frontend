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
              <div className={styles.progressBtn}>1</div>
              {/*id={val.Total === 1 ? styles.active : null}*/}
              <div className={styles.progressBtn}>2</div>
              <div className={styles.progressBtn}>3</div>
              <div className={styles.progressBtn}>4</div>
              <div className={styles.progressBtn}>5</div>
              <div className={styles.progressBtn}>6</div>
              <div className={styles.progressBtn}>7</div>
              <div className={styles.progressBtn}>8</div>
              <div className={styles.progressBtn}>9</div>
              <div className={styles.progressBtn}>10</div>
              <div className={styles.progressBtn}>11</div>
              <div className={styles.progressBtn}>12</div>
              <div className={styles.progressBtn}>13</div>
              <div className={styles.progressBtn}>14</div>
              <div className={styles.progressBtn}>15</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
