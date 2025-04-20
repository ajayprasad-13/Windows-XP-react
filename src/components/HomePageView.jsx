import style from "../styles/homepageview.module.css";
import pdflogo from "../assets/pdf.png";
import Resume from "./Resume";
import StartMenuView from "./StartMenuView";
import { useDispatch, useSelector } from "react-redux";
import { toggleStartMenu, toggleResume } from "../components/slices/xpstore";

export default function HomePageView() {
  const dispatch = useDispatch();

  // Corrected keys based on your slice state
  const openStart = useSelector((state) => state.xp.isStartOpen);
  const isResumeOpen = useSelector((state) => state.xp.isResumeOpen);

  function handleBackgroundClick() {
    if (openStart) {
      dispatch(toggleStartMenu());
    }
  }

  return (
    <div onClick={handleBackgroundClick} className={style.homePageView}>
      <div>
        <button
          onClick={() => dispatch(toggleResume())}
          className={style.logoBtn}
        >
          <img src={pdflogo} alt="Resume icon" />
          <p>Resume.pdf</p>
        </button>
      </div>

      <div>{isResumeOpen && <Resume />}</div>

      <div className={style.startMenuView}>
        {openStart && <StartMenuView />}
      </div>
    </div>
  );
}
