import styles from "./styles/StudentProjectLibrary.module.css"
import Filter from "./FilterStudentProjectLibrary";
// index.html has <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link> 

const { studentHome, studentContent, pageTitle } = styles;

function Content() {

    return (
        <>
            <div id={pageTitle}>
                <h1>PROJECTS</h1>
                <p>Welcome to the project library. You can use the filter on the right to help you search for specific projects.</p>
                </div>
                
            <div id={studentHome}>
                <Filter />
                <div class="w3-bar">
                    <button class="w3-button w3-black">Button</button>
                    <button class="w3-button w3-teal">Button</button>
                    <button class="w3-button w3-red">Button</button>
                </div>

                <div id={studentContent}>
                    <button>BEGINNER</button>
                    <button>INTERMEDIATE</button>
                    <button>ADVANCED</button>
                    </div>
                <div>
                    SHOW <button>25</button>
                    <button>50</button>
                    <button>100</button>
                    </div>
                <div>
                    PROJECT IMAGES
                    </div>
                </div> 
        </>
    )
}

export default Content;