import styles from "./styles/StudentProjectLibrary.module.css"
import Filter from "./FilterStudentProjectLibrary";
import Content from "./ContentStudentProjectLibrary"

const { studentHome, pageTitle } = styles;

function Home() {

    return (
        <>
            <div id={pageTitle}>
                <h1>PROJECTS</h1>
                <p>Welcome to the project library. You can use the filter on the right to help you search for specific projects.</p>
                </div>

            <div id={studentHome}>
                <Filter />
                <Content />
                </div>
        </>
    )
}

export default Home;