import styles from './styles/StudentProjectLibrary.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/Button';

function PageOptions() {

    return (
        
        <div id={styles.pageOptions}>
                    <ToggleButtonGroup size="sm" type="radio" name="level" defaultValue={1}>
                        <ToggleButton  variant='primary' id="level-beginner" value={1}>
                            BEGINNER
                            </ToggleButton>
                        <ToggleButton variant='light' id="level-intermediate" value={2}>
                            INTERMEDIATE
                            </ToggleButton>
                        <ToggleButton variant='light'id="level-advanced" value={3}>
                            ADVANCED
                            </ToggleButton>                 
                    </ToggleButtonGroup>
                    <div>
                    SHOW <ToggleButtonGroup  size="sm" type="radio" name="show" defaultValue={1}>
                        <ToggleButton variant='primary' id="show-25" value={1}>
                            25
                            </ToggleButton>
                        <ToggleButton variant='light' id="show-50" value={2}>
                            50
                            </ToggleButton>
                        <ToggleButton variant='light' id="show-100" value={3}>
                            100
                            </ToggleButton>                   
                        </ToggleButtonGroup>
            </div>
            </div>
            

    )
}

export default PageOptions;

