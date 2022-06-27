import HomeHeader from "../components/home/HomeHeader"
import Footer from "../components/shared/Footer"
import Intro from "../components/home/Intro"

export default function Home() {
    return (
      <div>
        <HomeHeader />
        <Intro/>
        <Footer />
      </div>
    );
}