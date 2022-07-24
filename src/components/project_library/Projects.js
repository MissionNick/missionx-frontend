import { FilterProject } from './FilterProject'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '../shared/Fallback'
import { errorHandler } from '../shared/ErrorHandler'
import splitString from '../shared/SplitString'

import axios from 'axios'
import { useEffect, useState } from "react";

import styles from "../styles/ProjectLibrary/ProjectLibrary.module.css"

const {showProject,pic,projName,projProps,hovertext} = styles;

const req_session = 1; // will be replaced with user session.


console.log("Component Load : ProjectLibrary/Projects ");


export default function Projects({ displayNumber, recordIndex, nextPage, levelSelect, subSelect }) {
 
    return (
        <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <div id={styles.projects}>
            <ShowProjects />         
        </div>
        </ErrorBoundary>    
    );

    function ShowProjects() {
        const [projectList, setProjectList] = useState([]);
        useEffect(() => {
            axios.post('http://localhost:4000/api/projects/student', {student_id:req_session})
                .then((response) => {
                    const newList = FilterProject(response.data, displayNumber, recordIndex, nextPage, levelSelect, subSelect);
                    setProjectList(newList);
                    console.log('POST Response',response.data[0])
                })
            .catch(function(error) {
                console.log(error);
                });
            }, []);
        
        const newList = FilterProject(projectList, displayNumber, recordIndex, nextPage, levelSelect, subSelect);

        return (
            <>{
                projectList.map(project => {
                    const { Name, projectpic, course, activity,instructions} = project;
                    const pname = splitString(Name, '–'); //remove project ## - 
                    return (
                        <div className={showProject}>
                            <hovertext className={hovertext} data-hover={`${pname}`}> 
                                <img  className={pic} src={projectpic} alt={pname} />
                            </hovertext>
                            <p className={`${projName}`}>{pname}</p>
                            <p className={projProps}>{course.toUpperCase()} | {activity}</p>
                        </div>
                    )
                })
            }
            </>
        );
        
        /* JSON file implementation
        
        console.log("Update Projects. Display Number:", displayNumber, " Level:", levelSelect, "SubSelect:", subSelect);
        const levelProjects = ProjectsDB.filter(project => project.level === levelSelect)
        console.log("Filtered Projects ", levelProjects)
        const subProjects = (subSelect > 2) ? levelProjects : levelProjects.filter(project => project.subscription === subSelect)
        console.log("Filtered Projects ", apiProjects)      
        return (
            <>
                {
                    subProjects.slice(recordIndex, displayNumber).map(project => {
                        const { imgsrc, label, level, type } = project;
                        const projectimg = require('../../assets/images/projects/' + imgsrc);
                        return (
                            <div className={styles.showProject}>
                                <img style={{ verticalAlign: 'middle', paddingRight: '3%' }} src={projectimg} alt="" />
                                <p>{label}</p>
                                <p>{level}|{type}</p>
                            </div>
                        )
                    })
                }
            </>
        );
        */
    }
}
