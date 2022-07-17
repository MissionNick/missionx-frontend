import { FilterProject } from './FilterProject'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '../shared/Fallback'
import { errorHandler } from '../shared/ErrorHandler'
import parse from 'html-react-parser';
//import { renderMarkup } from '../shared/renderMarkup'
//import ProjectsDB from "./studentprojectdb.json" replaced by mysql
//import Httpreq  from './httpreq'  TODO refatcor

import axios from 'axios'
import { useEffect, useState } from "react";

import styles from "../styles/ProjectLibrary/ProjectLibrary.module.css"


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
            axios.post('http://localhost:4000/api/projects/student')
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
                    const { name, projectpic, course,activity} = project;
                    return (
                        <div className={styles.showProject}>
                            <img style={{ verticalAlign: 'middle', paddingRight: '3%' }} src={projectpic} alt="image unavailable"  className="img-responsive" />
                            <p>{name}</p>
                            <p>{course}|{activity}</p>
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
