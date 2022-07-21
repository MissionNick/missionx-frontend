// import { StudentData } from "../data/StudentProfileData";
import styles from "../../components/styles/student-profiles/StudentCard.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../shared/Loading";

export default function StudentCard() {
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:4000/api/students").then((response) => {
      setStudentList(response.data);
    });
  }, []);

  useEffect(() => {
    Object.keys(studentList).length === 0
      ? setIsLoading(true)
      : setIsLoading(false);
  }, [studentList]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className={styles.student_wrapper} id={styles.scroll}>
      {studentList.map((val) => {
        return (
          <div key={val.student_id} className={styles.student_item}>
            {
              <img
                src={val.profilepic}
                alt="placeholder"
                className={styles.profileImg}
              ></img>
            }
            {val.Name}
          </div>
        );
      })}
    </div>
  );
}
