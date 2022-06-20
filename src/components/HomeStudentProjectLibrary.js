import { useState } from 'react'

import styles from "./styles/StudentProjectLibrary.module.css"
import Filter from "./FilterStudentProjectLibrary"
import Content from "./ContentStudentProjectLibrary"

const { studentHome, pageTitle } = styles;


function Home() {

    const [subSelect, setSubSelect] = useState([1]);
    const updateSubSelect = (val) => {
        console.log('Changed subscription ', val);
        setSubSelect(val);
        //1=Free,2=Premium,3=Both
    }

    return (
        <>
            <div id={pageTitle}>
                <h1>PROJECTS</h1>
                <p>Welcome to the project library. You can use the filter on the right to help you search for specific projects.</p>
                </div>

            <div id={studentHome}>
                <Filter subSelect={subSelect} updateSubSelect={updateSubSelect}  />
                <Content />
                </div>
        </>
    )
}

export default Home;