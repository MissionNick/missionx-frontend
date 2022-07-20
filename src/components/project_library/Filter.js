import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '../shared/Fallback'
import { errorHandler } from '../shared/ErrorHandler'

import styles from "../styles/ProjectLibrary/ProjectLibrary.module.css"
import FilterGroup from "../shared/FilterGroup"

console.log("Component Load : ProjectLibrary/Filter ")



function Filter({updateSelect}) {
    
    const handleOnChange = (e) => {
        console.log('Filter changed - ', e);
        updateSelect(e);
    };

    
    return (
        <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <div id={styles.filter}>        
            <FilterGroup heading="SUBSCRIPTION"
                    filters={["Free","Premium"]}
                    updateSelect={handleOnChange}/>
            <FilterGroup heading="ACTIVITY TYPE"
                    filters={["Animation","Game","Chabot","Augmented Reality"]}
                    updateSelect={handleOnChange} />
                
            <FilterGroup heading="YEAR LEVEL"
                    filters={["1-4","5-6","7-8","9-13"]}
                    updateSelect={handleOnChange}/>
            <FilterGroup heading="SUBJECT MATTER"
                    filters={["Computer Science","Maths","Science","Language","Art","Music"]}
                    updateSelect={handleOnChange} /> 
        </div>
        </ErrorBoundary>
    )
    
}

export default Filter;