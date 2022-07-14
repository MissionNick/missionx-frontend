import Navbar from "../components/shared/Navbar"
import Footer from "../components/shared/Footer"
import Intro from "../components/home/Intro"
import HomeSection2 from "../components/home/HomeSection2";
import HomeSection3 from "../components/home/HomeSection3";
import HomeSection4 from "../components/home/HomeSection4";
import HomeSection5 from "../components/home/HomeSection5";
import { useState } from "react";
import SignupLogin from "../components/home/Signup-Login";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    return (
      <div>
        <Navbar setIsModalOpen={setIsModalOpen} />
        <Intro setIsModalOpen={setIsModalOpen} setIsSignUp={setIsSignUp} />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 setIsModalOpen={setIsModalOpen} setIsSignUp={setIsSignUp} />
        <Footer />
        {isModalOpen && (
          <SignupLogin
            isSignUp={isSignUp}
            setIsSignUp={setIsSignUp}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </div>
    );
}