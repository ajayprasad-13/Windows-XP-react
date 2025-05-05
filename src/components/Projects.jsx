import FolderContainer from "./FolderContainer";
import ieIcon from "../assets/Internet Explorer 6.png";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleImgtoPdF,
  toggleProject,
  toggleSteamDeals,
} from "./slices/xpstore";
import IEContainer from "./IEContainer";
import style from "../styles/projects.module.css";

export default function Projects() {
  const isImgtoPdfOpen = useSelector((state) => state.xp.isImgtoPdfopen);
  const isSteamDealsOpen = useSelector((state) => state.xp.isSteamDealsOpen);

  function handleImgtoPdf() {
    dispatch(toggleImgtoPdF());
  }

  function handleSteamDeals() {
    dispatch(toggleSteamDeals());
  }

  const dispatch = useDispatch();
  const projectFolderContent = [
    {
      title: "IMG to PDF Converter",
      src: ieIcon,
      onClickfun: handleImgtoPdf,
      url: "https://image-to-pdf-two.vercel.app/",
    },
    {
      title: "Steam Deals",
      src: ieIcon,
      onClickfun: handleSteamDeals,
      url: "https://steam-deals-ten.vercel.app/",
    },
  ];

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
        {isImgtoPdfOpen && (
          <IEContainer
            ieDataArray={projectFolderContent[0]}
            onCloseProject={handleImgtoPdf}
          />
        )}
        {isSteamDealsOpen && (
          <IEContainer
            ieDataArray={projectFolderContent[1]}
            onCloseProject={handleSteamDeals}
          />
        )}
      </div>
    </>
  );
}
