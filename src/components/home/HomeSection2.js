import styles from "../styles/home/HomeSection2.module.css";
import Tile from "./Tile";
import frame from '../images/home/Frame_Copy.png'
import joystick from "../images/home/Joystick.png";
import robot from "../images/home/Robot.png";
import augment from "../images/home/Augmented-reality.png";
import project1 from "../images/home/Projects1.png";
import CircleButton from './CircleButton'

export default function HomeSection2() {
  return (
    <div id={styles.sectionTwo}>
      <div id={styles.sectionTwoLeft}>
        <div id={styles.sectionTwoMainTitle}>What we offer</div>
        <div id={styles.sectionTwoDesc}>
          The Creative Problem Solving programme is series of digital creation
          projects aimed to encourage self-motivation and student agency,
          designed by New Zealand’s leading IT industry experts and schools.
        </div>
        <div id={styles.sectionTwoSubTitle}>What will students create?</div>
        <div id={styles.tiles}>
          <Tile image={frame} tileName={"ANIMATION"} />
          <Tile image={joystick} tileName={"GAMES"} />
          <Tile image={robot} tileName={"CHATBOTS"} />
          <Tile image={augment} tileName={"AUGMENTED REALITY"} />
        </div>
      </div>
      <div id={styles.sectionTwoRight}>
        <img id={styles.projectImage} src={project1} alt="Project" />
        <div id={styles.buttons}>
          <CircleButton color={"#707070"} />
          <CircleButton color={"white"} />
          <CircleButton color={"white"} />
          <CircleButton color={"white"} />
        </div>
      </div>
    </div>
  );
}
