import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '../shared/Fallback'
import { errorHandler } from '../shared/ErrorHandler'

import styles from "../styles/ProjectLibrary/ProjectLibrary.module.css"

import PageOptions from "./PageOptions"
import Projects from "./Projects";

console.log("Component Load : ProjectLibrary/Content ")



function Content({ subSelect }) {


    const [levelSelect, setLevelSelect] = useState(0);
    const handleLevelClick = (e) => {
        console.log('Changed ', e.target.name);
        setLevelSelect(e.target.value);
    }

    const [displayNumber, setDiplayNumber] = useState();
    const handleDisplayNumberClick = (e) => {
        console.log('Changed ',e.target.name);
        setDiplayNumber(e.target.name);
    }

    const [recordIndex, setRecordIndex] = useState(0);
    const nextPage = () => { setRecordIndex(recordIndex + displayNumber) };

    
    return (
        <>
            <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
                <div id={styles.studentContent}>
                <PageOptions displayNumber={displayNumber} handleDisplayNumberClick={handleDisplayNumberClick} levelSelect={levelSelect} handleLevelClick={handleLevelClick} />
                <Projects subSelect={subSelect} displayNumber={displayNumber} recordIndex={recordIndex} nextPage={nextPage} levelSelect={levelSelect} />            
                </div>
            </ErrorBoundary>
        </>
    )
}

export default Content;

