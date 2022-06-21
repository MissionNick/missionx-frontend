import styles from "./styles/StudentProjectLibrary.module.css"
import Projects from "./studentprojectdb.json"

export default function StudentProjects({ displayNumber, recordIndex, nextPage, levelSelect, subSelect }) {
    console.log(displayNumber);
    return (
        <div id={styles.projects}>
            <ShowProjects />
            
        </div>
    );

    function ShowProjects() {
        console.log("Update Projects. Number:", displayNumber, " Level:", levelSelect, "SubSelect:", subSelect);
        const levelProjects = Projects.filter(project => project.level === levelSelect)
        console.log("Filtered Projects ", levelProjects)
        const subProjects = (subSelect > 2) ? levelProjects : levelProjects.filter(project => project.subscription === subSelect)
        console.log("SubFiltered Projects ", subProjects)
        return (
            <>
                {
                    subProjects.slice(recordIndex, displayNumber).map(project => {
                        const { imgsrc, label, level, type } = project;
                        return (
                            <div className={styles.showProject}>
                                <img style={{ verticalAlign: 'middle', paddingRight: '3%' }}
                                    src={require(`${imgsrc}`)} alt="" />
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
