// import { StudentData } from "../data/StudentProfileData";
import styles from "../../components/styles/student-profiles/StudentCard.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function StudentCard() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/students").then((response) => {
      setStudentList(response.data);
    });
  }, []);

  return (
    <div className={styles.student_wrapper} id={styles.scroll}>
      {studentList.map((val) => {
        return (
          <div key={val.StudentID} className={styles.student_item}>
            {<img src={val.ProfilePic} alt="placeholder"></img>}
            {val.Name}
          </div>
        );
      })}
    </div>
  );
}
