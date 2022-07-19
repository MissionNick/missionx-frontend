import styles from '../styles/profile/Profile.module.css'
import dateFormat from '../shared/DateFormat'

/* Created as a form default readonly - Will change to edit onClick */

export default function Profile({ profile }) {

    const dob = dateFormat(profile.date_of_birth);
    return (
            <form className={styles.profile}>
                <h>{profile.name}
                </h>
                <label>School
                    <input disabled="true" type="text" name="school" value={profile.school} />
                    </label>
                <label>Teacher
                    <input disabled="true" type="text" name="teacher" value={profile.teacher_name} />
                    </label>
                <label>Course
                    <input disabled="true" type="text" name="course" value={profile.course} />
                    </label>
                <label>Date of Birth
                    <input disabled="true" type="text" name="dob" value={dob} />
                    </label>
                <label>Contact No
                    <input disabled="true" type="text" name="contact_number" value={profile.contact_number} />
                    </label>
                <label>Email Address
                    <input disabled="true" type="text" name="email" value={profile.email} />
                    </label>
            
            </form>
    )
}