import React from 'react';
import styles from '../styles/profile/Profile.module.css';
import { Link } from "react-router-dom";


export default function BackToProject() {
    /* Investigate alternative to <LINK>
    import { useNavigate } from "react-router-dom";
    const navigate = useNavigate(); 

    const routeChange = () => { 
        const path = `localhost:3000/student`; 
        console.log(path)
        navigate(path);
        
    } 
    */ 

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: '#EEEEEE' }} >
            
            <Link to="/student">
                <button
                    className={styles.btn_back} 
                    >BACK TO PROJECTS</button>
            </Link>
        </div>
    )
}