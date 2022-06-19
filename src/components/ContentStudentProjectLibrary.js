import styles from "./styles/StudentProjectLibrary.module.css"
import PageOptions from "./PageOptionsStudentProjectLibrary"
import StudentProjects from "./ProjectsStudentProjectLibrary";


function Content() {

    return (
        <>
            <div id={styles.studentContent}>

                <PageOptions />
                <StudentProjects />
                
            </div>
        </>
    )
}

export default Content;