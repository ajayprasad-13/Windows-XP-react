import style from "../styles/taskbar.module.css";
import startLogo from "../assets/startLogo.png";
import muteLogo from "../assets/muteLogo.png";
import { useEffect, useState } from "react";
import startBtn from "../assets/start.png";
import { useDispatch } from "react-redux";
import { toggleStartMenu } from "../components/slices/xpstore";

export default function Taskbar() {
  const [time, setTime] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setTime(`${hours}:${minutes < 10 ? "0" + minutes : minutes}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={style.taskBar}>
        <div
          className="nativeButton"
          style={{ margin: "0", padding: "0", height: "100%" }}
        >
          <button
            onClick={() => {
              dispatch(toggleStartMenu());
            }}
            className={`${style.startBtn} noWhiteFlash noBgChange`}
          ></button>
        </div>

        <div className={style.taskBarRight}>
          <img src={muteLogo} />
          <p>{time}</p>
        </div>
      </div>
    </>
  );
}
