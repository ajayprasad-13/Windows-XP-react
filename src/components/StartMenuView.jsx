import style from "../styles/startmenuview.module.css";
import profileImg from "../assets/profile.jpg";
import ieicon from "../assets/ielogo.png";
import emailicon from "../assets/emailicon.png";
import windowsmediaplayer from "../assets/windowsmediaplayer.png";
import allprogbtn from "../assets/allprogbtn.png";
import mydocumentlogo from "../assets/mydocument.png";
import mypiclogo from "../assets/mypiclogo.png";
import foldericon from "../assets/folder.png";
import mycompicon from "../assets/mycompicon.png";
import controlpanelicon from "../assets/controlpanelicon.png";
import helpandsupport from "../assets/helpandsupport.png";
import searchicon from "../assets/search.png";
import logofficon from "../assets/logout.png";
import shutdownicon from "../assets/shutdown.png";

import { toggleComingSoon } from "../components/slices/xpstore";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "react-windows-xp";

const lefttopSectionData = [
  {
    src: ieicon,
    title: "Internet",
    desc: "Internet Explorer",
  },
  {
    src: emailicon,
    title: "E-mail",
    desc: "Outlook Express",
  },
];

const leftBottomSectionData = [
  {
    src: windowsmediaplayer,
    title: "Windows Media Player",
  },
];

const rightTopSectionData = [
  {
    src: mydocumentlogo,
    title: "My Document",
  },
  {
    src: mypiclogo,
    title: "My Pictures",
  },
  {
    src: foldericon,
    title: "My Music",
  },
  {
    src: mycompicon,
    title: "My Computer",
  },
];

const rightMiddleSectionData = [
  {
    src: controlpanelicon,
    title: "Control Panel",
  },
];

const rightBottomSectionData = [
  {
    src: helpandsupport,
    title: "Help and Support",
  },
  {
    src: searchicon,
    title: "Search",
  },
];

export default function StartMenuViw() {
  const isComingSoonOpen = useSelector((state) => state.xp.isComingSoonOpen);

  const dispatch = useDispatch();

  function handleOpenComingSoon() {
    dispatch(toggleComingSoon());
  }

  return (
    // Start Menu Container

    <div className={style.container}>
      {/* Profile Picture div */}
      <div className={style.profile}>
        <img src={profileImg} />
        <Typography variant="paragraph">Admin</Typography>
      </div>
      <div className={style.boxContainer}>
        <div className={style.leftSection}>
          <div>
            {/* Start Menu top data */}

            {lefttopSectionData.map((item, index) => (
              <button
                onClick={handleOpenComingSoon}
                key={index}
                className={style.startData}
              >
                <img src={item.src} />
                <div className={style.startText}>
                  <Typography
                    variant="paragraph"
                    className={style.startTextTitle}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className={style.startTextDesc}
                  >
                    {item.desc}
                  </Typography>
                </div>
              </button>
            ))}

            {/* Horizontal line */}

            <hr className={style.horiline} />

            {/* Start Menu bottom data */}

            {leftBottomSectionData.map((item, index) => (
              <button
                onClick={handleOpenComingSoon}
                key={index}
                className={style.startData}
              >
                <img src={item.src} />
                <Typography variant="paragraph">{item.title}</Typography>
              </button>
            ))}
          </div>
          <div>
            <hr className={style.horiline} />
            <div className={style.leftallprog}>
              <button className={style.allprog}>
                <Typography variant="paragraph">All Programs</Typography>
                <img src={allprogbtn} />
              </button>
            </div>
          </div>
        </div>

        {/* Start Menu Right side div */}

        <div className={style.rightSection}>
          {/* Start Menu right side top data html */}

          {rightTopSectionData.map((item, index) => (
            <button
              onClick={handleOpenComingSoon}
              key={index}
              className={style.startData}
            >
              <img src={item.src} />
              <Typography variant="paragraph" className={style.rightTopText}>
                {item.title}
              </Typography>
            </button>
          ))}
          <hr className={style.horiline} />

          {/* Start menu middle data html */}

          {rightMiddleSectionData.map((item, index) => (
            <button
              onClick={handleOpenComingSoon}
              key={index}
              className={style.startData}
            >
              <img src={item.src} />
              <Typography variant="paragraph" className={style.rightmiddletext}>
                {item.title}
              </Typography>
            </button>
          ))}
          <hr className={style.horiline} />

          {/* Start menu bottom data html */}

          {rightBottomSectionData.map((item, index) => (
            <button
              onClick={handleOpenComingSoon}
              key={index}
              className={style.startData}
            >
              <img src={item.src} />
              <Typography variant="paragraph" className={style.rightmiddletext}>
                {item.title}
              </Typography>
            </button>
          ))}
        </div>
      </div>

      {/* log off and turn off the computer html */}
      <div className={style.turnoncon}>
        <button onClick={handleOpenComingSoon} className={style.logoff}>
          <img src={logofficon} />
          <Typography variant="paragraph" className={style.logOffText}>
            Log off
          </Typography>
        </button>
        <button onClick={handleOpenComingSoon} className={style.shutDown}>
          <img src={shutdownicon} />
          <Typography
            style={{ outline: "none" }}
            variant="paragraph"
            className={style.logOffText}
          >
            Turn Off Computer
          </Typography>
        </button>
      </div>
    </div>
  );
}
