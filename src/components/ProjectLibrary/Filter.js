import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '../shared/Fallback'
import { errorHandler } from '../shared/ErrorHandler'

import styles from "../styles/StudentProjectLibrary.module.css"

console.log("Component Load : ProjectLibrary/Filter ")

function Filter({ subSelect, updateSubSelect }) {
    
    // TO DO - Create function to establish UI and state for all filters
    // Initial simple subscription filter created with UI mock for the remaining.

    const subfilters = [{ name: "Free"}, {name: "Premium"} ]
    
    const [checkedState, setCheckedState] = useState(
    new Array(subfilters.length).fill(true)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => 
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);

        const refreshProjects = updatedCheckedState.reduce(
                (sum, currentState, index) => {
                    if (currentState === true) {
                    return sum + index+1;
                }
                return sum;
            },
                0
            );

        updateSubSelect(refreshProjects);
        
    };
    

    return (
        <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <div id={styles.filter}>
            <filterTitle>SUBSCRIPTION</filterTitle>   
            <div className="sub-list">
            {subfilters.map(({name}, index) => {
                return (
                    <div key={index}>
                            <input
                                type="checkbox"
                                id={`sub-${index}`}
                                name={name}
                                value={index}
                                checked={checkedState[index]}
                                onChange={() => handleOnChange(index)}
                            /> {name}
                    </div>
                );
            })}
            </div>       
            <filterSectionEnd />
            
            <filterTitle>ACTIVITY TYPE</filterTitle> 
            <label><input type="checkbox" checked="checked"/> Animation</label>
            <label><input type="checkbox" checked="" /> Game</label>
            <label><input type="checkbox" checked="" /> Chabot</label>
            <label><input type="checkbox" checked="" /> Augmented Reality</label>
            <filterSectionEnd />

            <filterTitle>YEAR LEVEL</filterTitle> 
            <label><input type="checkbox" checked="checked"/> 1-4</label>
            <label><input type="checkbox" checked="" /> 5-6</label>
            <label><input type="checkbox" checked="" /> 7-8</label>
            <label><input type="checkbox" checked="" /> 9-13</label>
            <filterSectionEnd />

            <filterTitle>SUBJECT MATTER</filterTitle> 
            <label><input type="checkbox" checked="checked"/> Computer Science</label>
            <label><input type="checkbox" checked="" /> Maths</label>
            <label><input type="checkbox" checked="" /> Science</label>
            <label><input type="checkbox" checked="" /> Language</label>
            <label><input type="checkbox" checked="" /> Art</label>
            <label><input type="checkbox" checked="" /> Music</label>
            <filterSectionEnd />

        </div>
        </ErrorBoundary>
    )
    
}

export default Filter;