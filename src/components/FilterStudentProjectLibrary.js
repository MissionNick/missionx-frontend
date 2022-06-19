import styles from "./styles/StudentProjectLibrary.module.css"

function Filter() {

    return (
        <div id={styles.filter}>
            <filterTitle>SUBSCRIPTION</filterTitle> 
            <label><input type="checkbox" checked="checked"/>Free</label>
            <label><input type="checkbox" checked="checked" />Premium</label>
            <filterSectionEnd />
            
            <filterTitle>ACTIVITY TYPE</filterTitle> 
            <label><input type="checkbox" checked="checked"/>Animation</label>
            <label><input type="checkbox" checked="checked" />Game</label>
            <label><input type="checkbox" checked="checked" />Chabot</label>
            <label><input type="checkbox" checked="checked" />Augmented Reality</label>
            <filterSectionEnd />

            <filterTitle>YEAR LEVEL</filterTitle> 
            <label><input type="checkbox" checked="checked"/>1-4</label>
            <label><input type="checkbox" checked="checked" />5-6</label>
            <label><input type="checkbox" checked="checked" />7-8</label>
            <label><input type="checkbox" checked="checked" />9-13</label>
            <filterSectionEnd />

            <filterTitle>SUBJECT MATTER</filterTitle> 
            <label><input type="checkbox" checked="checked"/>Computer Science</label>
            <label><input type="checkbox" checked="checked" />Maths</label>
            <label><input type="checkbox" checked="checked" />Science</label>
            <label><input type="checkbox" checked="checked" />Language</label>
            <label><input type="checkbox" checked="checked" />Art</label>
            <label><input type="checkbox" checked="checked" />Music</label>
            <filterSectionEnd />

        </div>
    )
}

export default Filter;