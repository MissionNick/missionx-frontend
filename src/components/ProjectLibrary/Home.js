import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '../shared/Fallback'
import { errorHandler } from '../shared/ErrorHandler'

import styles from "../styles/ProjectLibrary.module.css"
import Filter from "./Filter"
import Content from "./Content"
import ScrollToTop from '../shared/ScrollToTop'

console.log("Component Load : ProjectLibrary/Home ")

const { studentHome, pageTitle } = styles;



function Home() {
    
    // Moved to ScrollToTop const scrollToTop = useRef()
    
    const [subSelect, setSubSelect] = useState(3);
    const updateSubSelect = (val) => {
        console.log('Changed subscription ', val);
        setSubSelect(val);
        //1=Free,2=Premium,3=Both
    }

    
    return (

        <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
            <ScrollToTop />
            <div id={pageTitle} >
                <h1>PROJECTS</h1>
                <p>Welcome to the project library. You can use the filter on the right to help you search for specific projects.</p>
                </div>

            <div id={studentHome}>
                <Filter subSelect={subSelect} updateSubSelect={updateSubSelect} />
                <Content subSelect={subSelect} />
            </div>
            
        </ErrorBoundary>    
    )
}

export default Home;