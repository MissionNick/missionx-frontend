import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/Button';
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from '../shared/Fallback'
import { errorHandler } from '../shared/ErrorHandler'

import styles from '../styles/StudentProjectLibrary.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

console.log("Component Load : ProjectLibrary/PageOptions ")


function PageOptions({handleLevelClick,handleDisplayNumberClick,levelSelect,displayNumber}) {

const handleClick=(e) => {
        console.log(e)
    handleLevelClick(e)
         //??? CHange the button variants?
    }



    return (
        
        <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <div id={styles.pageOptions}>
            <ToggleButtonGroup onClick={handleClick} size="sm" type="radio" name="level" defaultValue={"BEGINNER"}>
                <ToggleButton variant='primary' id="level-beginner" value={"BEGINNER"}>
                    BEGINNER
                    </ToggleButton>
                <ToggleButton variant='light' id="level-intermediate" value={"INTERMEDIATE"}>
                    INTERMEDIATE
                    </ToggleButton>
                <ToggleButton variant='light' id="level-advanced" value={"ADVANCED"}>
                    ADVANCED
                    </ToggleButton>                 
                </ToggleButtonGroup>
            <div>
                SHOW <ToggleButtonGroup onClick={handleDisplayNumberClick} size="sm" type="radio" name="show" defaultValue={1}>
                        <ToggleButton variant='primary' id="show-25" value={25}>
                            25
                            </ToggleButton>
                        <ToggleButton variant='light' id="show-50" value={50}>
                            50
                            </ToggleButton>
                        <ToggleButton variant='light' id="show-100" value={100}>
                            100
                            </ToggleButton>                   
                        </ToggleButtonGroup>
            </div>
            </div>
        </ErrorBoundary>   

    )
}

export default PageOptions;