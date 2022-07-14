import styles from "../styles/ProgressTracker/ProgressTracker.module.css";

export default function SpreadsheetExport() {
  return (
    <div>
      <div className={styles.exportContainer}>
        <h1 className={styles.title}>Beginner Course</h1>
        <h2 className={styles.exportTitle}>Export As Spreadsheet</h2>
      </div>
    </div>
  );
}
