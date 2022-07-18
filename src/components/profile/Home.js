import { useState,useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '../shared/Fallback'
import { errorHandler } from '../shared/ErrorHandler'
import axios from 'axios'
import styles from '../styles/profile/Profile.module.css'
import Profile from '../profile/Profile'
import { style } from '@mui/system'
import BackToProject from './BackToProject'


const student_id = 1; // will be replaced with user session.

//import styles from "../styles/ProjectLibrary/ProjectLibrary.module.css"

console.log("Component Load : Profile/Home ")

export default function Home() {

    return (
        <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
            <ShowProfile />
            <BackToProject />
        </ErrorBoundary>
    
    )
    

    function ShowProfile() {
    
    const [profile, setProfile] = useState([]);
        useEffect(() => {
            axios.post('http://localhost:4000/api/profile/student', {
                student_id:student_id
            })
                .then((response) => {
                    setProfile(response.data[0]);
                    console.log('POST Response',response.data[0])
                })
            .catch(function(error) {
                console.log(error);
                });
        }, []);
        
    
        return (
            <div className={styles.frame}>
                <div className={styles.menu}>
                    <img className={styles.profilepic} src={profile.profilepic} alt="image unavailable"  />
                    <button className={styles.btn_edit}>EDIT PROFILE</button>
                    <button className={styles.btn_edit}>CHANGE PHOTO</button>
                </div>
                <Profile profile={profile} />    
            </div>
        )

    }  
}