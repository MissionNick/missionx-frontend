import styles from "../styles/ProgressTracker/ProgressTracker.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../shared/Loading";
export default function StudentProgress() {
  const [progressList, setProgressList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/students/progress")
      .then((response) => {
        setProgressList(response.data);
      });
  }, []);

  useEffect(() => {
    Object.keys(progressList).length === 0
      ? setIsLoading(true)
      : setIsLoading(false);
  }, [progressList]);

  return isLoading ? (
    <Loading />
  ) : (
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
              {Array.from({ length: 15 }, (_, i) => (
                <div
                  className={styles.progressBtn}
                  style={{
                    backgroundColor:
                      val.date_completed !== null && val.project_id === i + 1
                        ? "#99EDCC"
                        : "white",
                  }}
                  key={i}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
