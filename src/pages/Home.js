import HomeHeader from "../components/home/HomeHeader"
import Footer from "../components/shared/Footer"
import Intro from "../components/home/Intro"
import HomeSection2 from "../components/home/HomeSection2";
import HomeSection3 from "../components/home/HomeSection3";
import HomeSection4 from "../components/home/HomeSection4";
import HomeSection5 from "../components/home/HomeSection5";

export default function Home() {
    return (
        <div>
        <HomeHeader />
        <Intro />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <Footer />
      </div>
    );
}