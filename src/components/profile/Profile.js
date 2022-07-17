import styles from '../styles/profile/Profile.module.css'

export default function Profile({ profile }) {
     
    return (
        <div className={styles.profile}>
            <label>School
            <input type="text" name="school" value={profile.name} />
            </label>
            <label>Teacher
            <input type="text" name="teacher" value={profile.teacher} />
            </label>
            <label>Course
            <input type="text" name="course" value={profile.course} />
            </label>
            <label>Date of Birth
            <input type="text" name="dob" value={profile.date_of_birth} />
            </label>
            <label>Contact No
                <input type="text" name="dob" value={profile.contact_number} />
            </label>
            <label>Email Address
                <input type="text" name="dob" value={profile.email} />
            </label>
        </div>
    )
}