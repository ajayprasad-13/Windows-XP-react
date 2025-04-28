import FolderContainer from "./FolderContainer";
import folderIcon from "../assets/folder.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleImgtoPdF, toggleProject } from "./slices/xpstore";
import IEContainer from "./IEContainer";
import style from "../styles/projects.module.css";

export default function Projects() {
  const isImgtoPdfOpen = useSelector((state) => state.xp.isImgtoPdfopen);

  function handleImgtoPdf() {
    console.log("handleImgtoPdf");
    dispatch(toggleImgtoPdF());
    console.log("isImgtoPdfOpen", isImgtoPdfOpen);
  }

  const dispatch = useDispatch();
  const projectFolderContent = [
    {
      title: "IMG to PDF Converter",
      src: folderIcon,
      onClickfun: handleImgtoPdf,
    },
  ];

  const isProjectOpen = useSelector((state) => state.xp.isProjectOpen);

  function handleProjectClose() {
    dispatch(toggleProject());
  }

  const windowPath = `C:\\Users\\Admin\\Desktop\\Project`;

  const folder = `Folders`;

  return (
    <>
      <FolderContainer
        windowTitle={folder}
        windowPath={windowPath}
        foldersArray={projectFolderContent}
        onCloseFolder={handleProjectClose}
      />
      <div className={style.ProjectsContainer}>
        {isImgtoPdfOpen && <IEContainer onCloseProject={handleImgtoPdf} />}
      </div>
    </>
  );
}
