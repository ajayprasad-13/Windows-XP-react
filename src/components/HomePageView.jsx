import style from "../styles/homepageview.module.css";
import pdflogo from "../assets/pdf.png";
import Resume from "./Resume";
import StartMenuView from "./StartMenuView";
import { useDispatch, useSelector } from "react-redux";
import { toggleStartMenu, toggleResume } from "../components/slices/xpstore";
import ComingSoon from "../components/ComingSoon";

export default function HomePageView() {
  const dispatch = useDispatch();

  const openStart = useSelector((state) => state.xp.isStartOpen);
  const isResumeOpen = useSelector((state) => state.xp.isResumeOpen);
  const isComingSoonOpen = useSelector((state) => state.xp.isComingSoonOpen);

  function handleBackgroundClick() {
    if (openStart) {
      dispatch(toggleStartMenu());
    }
  }

  function handleOpenResume() {
    if (!isResumeOpen) {
      dispatch(toggleResume());
    }
  }

  return (
    <div onClick={handleBackgroundClick} className={style.homePageView}>
      <div>
        <button onClick={handleOpenResume} className={style.logoBtn}>
          <img src={pdflogo} alt="Resume icon" />
          <p>Resume.pdf</p>
        </button>
      </div>

      <div>{isResumeOpen && <Resume />}</div>
      <div>{isComingSoonOpen && <ComingSoon />}</div>
      <div className={style.startMenuView}>
        {openStart && <StartMenuView />}
      </div>
    </div>
  );
}
