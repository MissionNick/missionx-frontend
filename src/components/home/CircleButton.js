import styles from "../styles/home/HomeSection2.module.css";

export default function CircleButton({ color }) {
  return (
    <span className={styles.dot} style={{ backgroundColor: color }}></span>
  );
}
