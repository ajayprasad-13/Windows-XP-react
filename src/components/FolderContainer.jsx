import { Typography, Window } from "react-windows-xp";
import style from "../styles/folderContainer.module.css";
import FileNav from "../components/FileNav";
import backwardIco from "../assets/back.png";
import forwardIco from "../assets/Forward.png";
import dropDown from "../assets/drop-down-arrow.png";
import upIco from "../assets/Up.png";
import searchIco from "../assets/search.png";
import folder from "../assets/folderIcon.png";
import iconView from "../assets/Icon View.png";
import dropDownFileIcon from "../assets/down-arrow.png";
import goIcon from "../assets/go.png";
import expandIcon from "../assets/expand.png";
import fileExpProp from "../assets/explorer properties.png";
import removeProgIcon from "../assets/Change or Remove Programs.png";
import controlPanelIcon from "../assets/Control Panel.png";
import networkIcon from "../assets/Network and Internet.png";
import myDoc from "../assets/Copy To.png";
import controlPanelPng from "../assets/controlpanelicon.png";

export default function FolderContainer({
  windowTitle,
  windowPath,
  foldersArray,
  onCloseFolder,
}) {
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

  const topAccordionContent = [
    {
      title: "View System Information",
      src: fileExpProp,
    },
    {
      title: "Add or remove program",
      src: removeProgIcon,
    },
    {
      title: "Change a setting",
      src: controlPanelIcon,
    },
  ];

  const middleAccordionContent = [
    {
      title: "My Network place",
      src: networkIcon,
    },
    {
      title: "My Document",
      src: myDoc,
    },
    {
      title: "Shared Document",
      src: folder,
    },
    {
      title: "Control Panel",
      src: controlPanelPng,
    },
  ];

  return (
    <div className={style.folderContainer}>
      <div className={style.folderContentContainer}>
        <Window
          style={{ margin: "0" }}
          onClose={onCloseFolder}
          onHelp={function noRefCheck() {}}
          onMaximize={function noRefCheck() {}}
          onMinimize={function noRefCheck() {}}
          showClose
          showMaximize
          showMinimize
          title={windowTitle}
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
            <div className={style.addressLeft}>
              <Typography
                style={{
                  color: "#b5b4ae",
                  margin: 0,
                  padding: 0,
                  fontSize: "12px",
                }}
                variant="paragraph"
              >
                Address
              </Typography>
            </div>
            {/* middlesection */}
            <div style={{ flex: "14" }} className={style.addressMiddle}>
              <div className={style.addressContent}>
                <div className={style.addressTextGroup}>
                  <img style={{ width: "14px", height: "14px" }} src={folder} />
                  <Typography variant="span">{windowPath}</Typography>
                </div>
                <img
                  src={dropDownFileIcon}
                  style={{
                    marginLeft: "auto",
                  }}
                />
              </div>

              {/* Right Section */}
            </div>
            <div className={style.addressRight} style={{ flex: "1" }}>
              <img src={goIcon} />
              <Typography
                style={{ margin: "0", padding: "0" }}
                variant="paragraph"
              >
                Go
              </Typography>
            </div>
          </div>
          {/* folder content container */}
          <div className={style.foldersContentContainer}>
            {/* folder content container left */}
            <div className={style.folderContentLeft}>
              {/* accordian container */}
              <div className={style.accordianContainer}>
                <div className={style.topAccordian}>
                  <div className={style.accordianHeader}>
                    <div>
                      <Typography
                        className={style.accordianHeaderText}
                        variant="h5"
                      >
                        Systems Tasks
                      </Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src={expandIcon} />
                    </div>
                  </div>
                  <div className={style.accordianContentContainer}>
                    {topAccordionContent.map((item) => (
                      <div className={style.accordianContent}>
                        <img src={item.src} />
                        <Typography
                          className={style.accordianContentText}
                          variant="span"
                        >
                          {item.title}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={style.MiddleAccordian}>
                  <div className={style.accordianHeader}>
                    <div>
                      <Typography
                        className={style.accordianHeaderText}
                        variant="h5"
                      >
                        Other files
                      </Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src={expandIcon} />
                    </div>
                  </div>
                  <div
                    className={`${style.accordianContentContainer} ${style.accordingBgSize}`}
                  >
                    {middleAccordionContent.map((item) => (
                      <div className={`${style.accordianContent}`}>
                        <img src={item.src} />
                        <Typography
                          className={`${style.accordianContentText}`}
                          variant="span"
                        >
                          {item.title}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* folder right content */}
            <div className={style.folderContentRight}>
              {foldersArray.map((items) => (
                <div onClick={items.onClickfun}>
                  <div className={style.folderImageContent}>
                    <img src={items.src} />
                  </div>
                  <div className={style.folderNameContent}>
                    <Typography variant="span">{items.title}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Window>
      </div>
    </div>
  );
}
