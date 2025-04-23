import { Typography, Window } from "react-windows-xp";
import style from "../styles/folderContainer.module.css";
import FileNav from "../components/FileNav";
import backwardIco from "../assets/back.png";
import forwardIco from "../assets/Forward.png";
import dropDown from "../assets/drop-down-arrow.png";
import upIco from "../assets/Up.png";
import searchIco from "../assets/search.png";
import folder from "../assets/folder.png";
import iconView from "../assets/Icon View.png";

export default function FolderContainer() {
  const utilityButtons = [
    {
      title: "Back",
      src: backwardIco,
      dropDownIcon: dropDown,
    },
    {
      title: false,
      src: forwardIco,
      dropDownIcon: dropDown,
    },
    {
      title: false,
      src: upIco,
      dropDownIcon: false,
    },
    {
      title: "Search",
      src: searchIco,
      dropDownIcon: false,
    },
    {
      title: "Folders",
      src: folder,
      dropDownIcon: false,
    },
    {
      title: false,
      src: iconView,
      dropDownIcon: dropDown,
    },
  ];

  return (
    <div className={style.folderContainer}>
      <div className={style.folderContentContainer}>
        <Window
          style={{ margin: "0" }}
          onClose={function noRefCheck() {}}
          onHelp={function noRefCheck() {}}
          onMaximize={function noRefCheck() {}}
          onMinimize={function noRefCheck() {}}
          showClose
          showMaximize
          showMinimize
          title="Default Window"
        >
          {/* File Navbar section */}
          <FileNav />
          <hr className={style.horizontalLine}></hr>
          {/* Utility Section */}
          <div className={style.utiContainer}>
            {utilityButtons.map((items, index) => (
              <div key={index} className="navUtilityContainer">
                <div className={style.utiBtn}>
                  <img src={items.src} />
                  {items.title && (
                    <Typography className={style.utiText} variant="span">
                      {items.title}
                    </Typography>
                  )}
                  {items.dropDownIcon && (
                    <img
                      style={{ width: "8px", height: "8px" }}
                      // className={style.dropDown}
                      src={items.dropDownIcon}
                    />
                  )}
                  {index === 2 && (
                    <div
                      style={{
                        borderLeft: "1px solid gray",
                        height: "20px",
                      }}
                    ></div>
                  )}
                  {index === 4 && (
                    <div
                      style={{
                        borderLeft: "1px solid gray",
                        height: "20px",
                      }}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <hr className={style.horizontalLine}></hr>
          {/* address section */}
          <div style={{ flex: "1" }} className={style.addressContainer}>
            <div>
              <Typography
                style={{ margin: 0, padding: 0, fontSize: "12px" }}
                variant="paragraph"
              >
                Address
              </Typography>
            </div>
            {/* middlesection */}
            <div style={{ flex: "3" }} className={style.addressMiddle}>
              <div className={style.addressContent}>
                <img style={{ width: "14px", height: "14px" }} src={folder} />
                <Typography variant="span">Projects</Typography>
              </div>
              <div>
                <Typography variant="span">hello</Typography>
              </div>
            </div>
            <div style={{ flex: "1" }}>
              <p style={{ margin: "0", padding: "0" }}>Right Section</p>
            </div>
          </div>
        </Window>
      </div>
    </div>
  );
}
