import { useState } from 'react';

import styles from "./styles/StudentProjectLibrary.module.css"

import PageOptions from "./PageOptionsStudentProjectLibrary"
import StudentProjects from "./ProjectsStudentProjectLibrary";





function Content() {


    const [levelSelect, setLevelSelect] = useState("BEGINNER");
    const handleLevelClick = (e) => {
        console.log('Changed ', e.target.value);
        setLevelSelect(e.target.value);
    }

    const [displayNumber, setDiplayNumber] = useState(25);
    const handleDisplayNumberClick = (e) => {
        console.log('Changed ',e.target.value);
        setDiplayNumber(e.target.value);
    }

    const [recordIndex, setRecordIndex] = useState(0);
    const nextPage = () => { setRecordIndex(recordIndex + displayNumber) };
    
    
    return (
        <>
            <div id={styles.studentContent}>
                <PageOptions displayNumber={displayNumber} handleDisplayNumberClick={handleDisplayNumberClick} levelSelect={levelSelect} handleLevelClick={handleLevelClick} />
                <StudentProjects displayNumber={displayNumber} recordIndex={recordIndex} nextPage={nextPage} levelSelect={levelSelect} />
                
            </div>
        </>
    )
}

export default Content;