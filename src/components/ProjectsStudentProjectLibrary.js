import styles from "./styles/StudentProjectLibrary.module.css"
import Projects from "./studentprojectdb.json"

function StudentProjects() {
       
    return (
        <div id={styles.projects}>
            <ShowProjects />
        </div>
    );
}

export default StudentProjects;

function ShowProjects() {
       
    return (
    <>
            {
                Projects.map(project => { 
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
