import style from "../styles/resume.module.css";
import resumeimg from "../assets/resume.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleResume } from "./slices/xpstore";
import { Window } from "react-windows-xp";
import FileNav from "./FileNav";

export default function Resume() {
  const isResumeOpen = useSelector((state) => state.xp.isResumeOpen);

  const dispatch = useDispatch();

  function handleResumeClose() {
    if (!isResumeOpen) return;
    dispatch(toggleResume());
  }

  return (
    <div className={style.resume}>
      <Window onClose={handleResumeClose} showClose showMaximize showMinimize>
        <div className={style.buttons}>
          {/* <div onClick={handleResumeClose} className={style.closeBtn}></div> */}
        </div>
        <FileNav />
        <img src={resumeimg} />
      </Window>
    </div>
  );
}
