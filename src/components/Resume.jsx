import style from "../styles/resume.module.css";
import resumeimg from "../assets/resume.jpg";

export default function Resume({ isResumeOpen, onOpenResume }) {
  function handleResumeClose() {
    if (!isResumeOpen) return;

    onOpenResume(!isResumeOpen);
  }

  return (
    <div className={style.resume}>
      <div className={style.resumeContainer}>
        <div className={style.buttons}>
          <button
            onClick={handleResumeClose}
            className={style.closeBtn}
          ></button>
        </div>
        <img src={resumeimg} />
      </div>
    </div>
  );
}
