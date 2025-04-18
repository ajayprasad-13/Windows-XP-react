import style from "../styles/resume.module.css";
import resumeimg from "../assets/resume.jpg";

export default function Resume() {
  return (
    <div className={style.resume}>
      <div className={style.resumeContainer}>
        <img src={resumeimg} />
      </div>
    </div>
  );
}
