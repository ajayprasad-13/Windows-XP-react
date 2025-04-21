import style from "../styles/resume.module.css";
import resumeimg from "../assets/resume.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleResume } from "./slices/xpstore";
import { Window } from "react-windows-xp";

export default function Resume() {
  const isResumeOpen = useSelector((state) => state.xp.isResumeOpen);

  const dispatch = useDispatch();

  function handleResumeClose() {
    if (!isResumeOpen) return;
    dispatch(toggleResume());
  }

  return (
    // <div className={style.resume}>
    //   <div className={style.resumeContainer}>
    //     <div className={style.buttons}>
    //       <button
    //         onClick={handleResumeClose}
    //         className={style.closeBtn}
    //       ></button>
    //     </div>
    //     <img src={resumeimg} />
    //   </div>
    // </div>
    <div className={style.resume}>
      <Window
        onClose={function noRefCheck() {}}
        onHelp={function noRefCheck() {}}
        onMaximize={function noRefCheck() {}}
        onMinimize={function noRefCheck() {}}
      >
        <div className={style.buttons}>
          <button
            onClick={handleResumeClose}
            className={style.closeBtn}
          ></button>
        </div>
        <img src={resumeimg} />
      </Window>
    </div>
  );
}
