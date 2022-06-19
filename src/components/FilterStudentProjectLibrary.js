import styles from "./styles/StudentProjectLibrary.module.css"

function Filter() {

    return (
        <div id={styles.filter}>
            <filterTitle>SUBSCRIPTION</filterTitle> 
            <label><input type="checkbox" checked="checked"/>Free</label>
            <label><input type="checkbox" checked="" />Premium</label>
            <filterSectionEnd />
            
            <filterTitle>ACTIVITY TYPE</filterTitle> 
            <label><input type="checkbox" checked="checked"/>Animation</label>
            <label><input type="checkbox" checked="" />Game</label>
            <label><input type="checkbox" checked="" />Chabot</label>
            <label><input type="checkbox" checked="" />Augmented Reality</label>
            <filterSectionEnd />

            <filterTitle>YEAR LEVEL</filterTitle> 
            <label><input type="checkbox" checked="checked"/>1-4</label>
            <label><input type="checkbox" checked="" />5-6</label>
            <label><input type="checkbox" checked="" />7-8</label>
            <label><input type="checkbox" checked="" />9-13</label>
            <filterSectionEnd />

            <filterTitle>SUBJECT MATTER</filterTitle> 
            <label><input type="checkbox" checked="checked"/>Computer Science</label>
            <label><input type="checkbox" checked="" />Maths</label>
            <label><input type="checkbox" checked="" />Science</label>
            <label><input type="checkbox" checked="" />Language</label>
            <label><input type="checkbox" checked="" />Art</label>
            <label><input type="checkbox" checked="" />Music</label>
            <filterSectionEnd />

        </div>
    )
}

export default Filter;