import styles from "../styles/home/HomeSection2.module.css";

export default function Tile({ image, tileName }) {
  return (
    <div id={styles.tileHolder}>
      <img id={styles.tileImage} src={image} alt="Frame" />
      <div id={styles.tileName}>{tileName}</div>
    </div>
  );
}
