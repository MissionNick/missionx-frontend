import { StudentData } from "../data/StudentProfileData";
import styles from "../../components/styles/student-profiles/StudentCard.module.css";

export default function StudentCard() {
  return (
    <div className={styles.student_wrapper} id={styles.scroll}>
      {StudentData.map((item, index) => {
        return (
          <div key={index} className={item.cName}>
            {item.profile_picture}
            {item.student_name}
          </div>
        );
      })}
    </div>
  );
}
