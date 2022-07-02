import ButtonGroup from '../shared/ButtonGroup'
import styles from '../styles/ProjectLibrary.module.css'
    
console.log("Component Load : ProjectLibrary/PageOptions ")


function PageOptions({ handleLevelClick, handleDisplayNumberClick }) {


const levelBtnGroup = ["BEGINNER", "INTERMEDIATE", "ADVANCED"];
const displayNumberBtnGroup = ["25", "50", "100"];

    return (
        <div id={styles.pageOptions}>
            <div>
                <ButtonGroup
                buttons={levelBtnGroup}
                doSomethingAfterClick={handleLevelClick}
                />
            </div>
            <div>
                SHOW <ButtonGroup
                buttons={displayNumberBtnGroup}
                doSomethingAfterClick={handleDisplayNumberClick}
                />
            </div>
        </div>
    )
}

export default PageOptions;