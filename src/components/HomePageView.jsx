import style from "../styles/homepageview.module.css";
import pdflogo from "../assets/pdf.png";
import Resume from "./Resume";
import { useState } from "react";
import StartMenuView from "./StartMenuView";

export default function HomePageView({ openStart, onOpenStart }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((e) => !e);
  }

  function handleCloseStart() {
    if (!openStart) {
      return;
    } else {
      onOpenStart(false);
    }
  }

  return (
    <>
      <div onClick={handleCloseStart} className={style.homePageView}>
        <div>
          <button onClick={handleClick} className={style.logoBtn}>
            <img src={pdflogo} />
            <p>Resume.pdf</p>
          </button>
        </div>
        <div>{isOpen && <Resume />}</div>
        <div className={style.startMenuView}>
          {openStart && <StartMenuView />}
        </div>
      </div>
    </>
  );
}
