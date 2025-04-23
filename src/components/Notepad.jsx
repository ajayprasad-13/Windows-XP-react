import { Window } from "react-windows-xp";
import style from "../styles/notepad.module.css";
import FileNav from "./FileNav";
import { useDispatch, useSelector } from "react-redux";
import { toggleNotePad } from "./slices/xpstore";

export default function Notepad() {
  const isNotePadOpen = useSelector((state) => state.xp.isNotePadOpen);
  const dispatch = useDispatch();

  function handleCloseNotepad() {
    if (!isNotePadOpen) return;
    dispatch(toggleNotePad());
  }

  return (
    <div className={style.notepadContainer}>
      <div className={style.notepad}>
        <Window
          className="notepad-window"
          onClose={handleCloseNotepad}
          onHelp={function noRefCheck() {}}
          onMaximize={function noRefCheck() {}}
          onMinimize={function noRefCheck() {}}
          showClose
          showMaximize
          showMinimize
          title="Notepad.exe"
        >
          <div className={style.navContainer}>
            <FileNav />
          </div>
          <textarea style={{ height: "500px", width: "100%" }} />
        </Window>
      </div>
    </div>
  );
}
