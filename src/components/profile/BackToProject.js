import React from 'react';
import styles from '../styles/profile/Profile.module.css';
import { useNavigate } from "react-router-dom";



export default function BackToProject() {

    const navigate = useNavigate(); 

    const routeChange = () => { 
        const path = `localhost:3000/student`; 
        console.log(path)
        navigate(path);
        
    }
    

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }} >
            <button  onclick={routeChange} className={styles.btn_back} >BACK TO PROJECTS</button>
        </div>
    )
}