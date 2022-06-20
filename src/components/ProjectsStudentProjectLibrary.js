import styles from "./styles/StudentProjectLibrary.module.css"
import Projects from "./studentprojectdb.json"

function StudentProjects({ displayNumber, recordIndex, nextPage, levelSelect, subSelect}) { 
    console.log(displayNumber);
    return (
        <div id={styles.projects}>
            <ShowProjects />
        </div>
    );

    function ShowProjects() {
        console.log("Update Projects. Number:", displayNumber, " Level:", levelSelect);
        const levelProjects = Projects.filter(project => project.level === levelSelect)
        console.log("Filtered Projects ", levelProjects)    
        //(subconst subProjects = levelProjects Projects.filter
        return (
    <>
            { 
                levelProjects.slice(recordIndex, displayNumber).map(project => { 
                const { imgsrc, label, level, type } = project;
                return (
                    <div className={styles.showProject}>
                        <img style={{ verticalAlign: 'middle', paddingRight: '3%' }}
                            src={require(`${ imgsrc }`)} alt="" />
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

export default StudentProjects;





