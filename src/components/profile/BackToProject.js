import styles from '../styles/profile/Profile.module.css';

export default function BackToProject() {

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }} >
                <button className={styles.btn_back} >BACK TO PROJECTS</button>
        </div>
    )
}