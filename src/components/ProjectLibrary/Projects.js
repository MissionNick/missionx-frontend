import styles from "../styles/StudentProjectLibrary.module.css"
import ProjectsDB from "./studentprojectdb.json"
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '../shared/Fallback'
import { errorHandler } from '../shared/ErrorHandler'

// Issues use src=rquire(${image})  - Module could not be loaded errors?

import fallbackimg from '../../assets/images/projects/Project 01.png'

console.log("Component Load : ProjectLibrary/Projects ")

const baseURL = "../../assets/images/projects/"





export default function Projects({ displayNumber, recordIndex, nextPage, levelSelect, subSelect }) {
 
    return (
        <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <div id={styles.projects}>
            <ShowProjects />         
        </div>
        </ErrorBoundary>    
    );

    function ShowProjects() {
        console.log("Update Projects. Display Number:", displayNumber, " Level:", levelSelect, "SubSelect:", subSelect);
        const levelProjects = ProjectsDB.filter(project => project.level === levelSelect)
        console.log("Filtered Projects ", levelProjects)
        const subProjects = (subSelect > 2) ? levelProjects : levelProjects.filter(project => project.subscription === subSelect)
        console.log("SubFiltered Projects ", subProjects)
        return (
            <>
                {
                    subProjects.slice(recordIndex, displayNumber).map(project => {
                        const { imgsrc, label, level, type } = project;
                        const image = baseURL + imgsrc;
                        return (
                            <div className={styles.showProject}>
                                <img style={{ verticalAlign: 'middle', paddingRight: '3%' }}
                                    src={fallbackimg} alt="image" />
                                <p>{label}</p>
                                <p>{level}|{type}</p>
                            </div>
                        )
                    })
                }
            </>
        );
    }
}
