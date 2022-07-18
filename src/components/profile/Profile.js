import { fontSize } from '@mui/system'
import styles from '../styles/profile/Profile.module.css'

export default function Profile({ profile }) {

    const dob = profile.date_of_birth;
    console.log(dob)
    return (
        
        <div className={styles.profile}>
            <h style={{ fontSize:'xxx-large',  }}>{profile.name}</h> 
            <label>School
            <input type="text" name="teacher" value={profile.school} />
            </label>
            <label>Teacher
            <input type="text" name="teacher" value={profile.teacher} />
            </label>
            <label>Course
            <input type="text" name="course" value={profile.course} />
            </label>
            <label>Date of Birth
                <input type="text" name="dob" value={dob} />
            </label>
            <label>Contact No
                <input type="text" name="contact_number" value={profile.contact_number} />
            </label>
            <label>Email Address
                <input type="text" name="email" value={profile.email} />
            </label>
        </div>
    )
}