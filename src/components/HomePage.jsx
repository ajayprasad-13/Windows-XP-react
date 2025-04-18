import style from "../styles/homepage.module.css";
import startLogo from "../assets/startLogo.png";
import muteLogo from "../assets/muteLogo.png";
import { useEffect, useState } from "react";
import Taskbar from "./Taskbar";
import HomePageView from "./HomePageView";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleStartChanges() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={style.homePageContainer}>
      <HomePageView onOpenStart={handleStartChanges} openStart={isMenuOpen} />
      <Taskbar onOpenStart={handleStartChanges} />
    </div>
  );
}
