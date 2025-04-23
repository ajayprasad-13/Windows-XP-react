import style from "../styles/homepageview.module.css";
import pdflogo from "../assets/pdf.png";
import Resume from "./Resume";
import StartMenuView from "./StartMenuView";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleStartMenu,
  toggleResume,
  toggleNotePad,
  toggleFolder,
} from "../components/slices/xpstore";
import ComingSoon from "../components/ComingSoon";
import notepadicon from "../assets/notepad.png";
import Notepad from "./Notepad";
import folder from "../assets/folderIcon.png";
import FolderContainer from "../components/FolderContainer";

export default function HomePageView() {
  const dispatch = useDispatch();

  const openStart = useSelector((state) => state.xp.isStartOpen);
  const isResumeOpen = useSelector((state) => state.xp.isResumeOpen);
  const isComingSoonOpen = useSelector((state) => state.xp.isComingSoonOpen);
  const isNotepadOpen = useSelector((state) => state.xp.isNotePadOpen);
  const isFolderOpen = useSelector((state) => state.xp.isFolderOpen);

  function handleBackgroundClick() {
    if (openStart) {
      dispatch(toggleStartMenu());
    }
  }

  function handleOpenNotepad() {
    if (isNotepadOpen) return;
    dispatch(toggleNotePad());
  }

  function handleOpenResume() {
    if (!isResumeOpen) {
      dispatch(toggleResume());
    }
  }

  function handleProjectsOpen() {
    dispatch(toggleFolder());
  }

  const homePageIcons = [
    {
      title: "Resume.pdf",
      src: pdflogo,
      onclick: handleOpenResume,
    },
    {
      title: "Notepad.exe",
      src: notepadicon,
      onclick: handleOpenNotepad,
    },
    {
      title: "Projects",
      src: folder,
      onclick: handleProjectsOpen,
    },
  ];

  return (
    <div onClick={handleBackgroundClick} className={style.homePageView}>
      <div className={style.iconCon}>
        {homePageIcons.map((items, index) => (
          <div key={index} onClick={items.onclick} className={style.logoBtn}>
            <div className={style.iconsImg}>
              <img src={items.src} alt="Resume icon" />
            </div>
            <div>
              <p>{items.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div>{isResumeOpen && <Resume />}</div>
      <div>{isComingSoonOpen && <ComingSoon />}</div>
      <div className={style.startMenuView}>
        {openStart && <StartMenuView />}
      </div>
      <div>{isNotepadOpen && <Notepad />}</div>
      <div>{isFolderOpen && <FolderContainer />}</div>
    </div>
  );
}
