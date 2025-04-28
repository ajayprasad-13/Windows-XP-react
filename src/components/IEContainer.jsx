import { Dropdown, Typography, Window } from "react-windows-xp";
import style from "../styles/iecontainer.module.css";
import FileNav from "./FileNav";
import backButton from "../assets/back.png";
import dropDownIcon from "../assets/drop-down-arrow.png";
import forwardIco from "../assets/Forward.png";
import explorerProperties from "../assets/explorer properties.png";
import ieRefresh from "../assets/IE Refresh.png";
import ieHome from "../assets/IE Home.png";
import searchIcon from "../assets/search.png";
import favouritesIcon from "../assets/Favorites.png";
import ieHistory from "../assets/IE History.png";
import emailIcon from "../assets/Email.png";
import printerIcon from "../assets/Printer.png";
import ieEdit from "../assets/IE Edit.png";
import iediscuss from "../assets/IE Discuss.png";
import dropDownFileIcon from "../assets/down-arrow.png";
import folder from "../assets/folderIcon.png";
import goIcon from "../assets/go.png";

const utilityButtons = [
  {
    src: backButton,
    title: "Back",
    dropdown: dropDownIcon,
  },
  {
    src: forwardIco,
    title: null,
    dropDown: dropDownIcon,
  },
  {
    src: explorerProperties,
    title: null,
    dropDown: null,
  },
  {
    src: ieRefresh,
    title: null,
    dropDown: null,
  },
  {
    src: ieHome,
    title: null,
    dropDown: null,
  },
  {
    src: searchIcon,
    title: "Search",
    dropDown: null,
  },
  {
    src: favouritesIcon,
    title: "Favourites",
    dropDown: null,
  },
  {
    src: ieHistory,
    title: null,
    dropDown: null,
  },
  {
    src: emailIcon,
    title: null,
    dropDown: dropDownIcon,
  },
  {
    src: printerIcon,
    title: null,
    dropDown: null,
  },
  {
    src: ieEdit,
    title: null,
    dropDown: dropDownIcon,
  },
  {
    src: iediscuss,
    title: null,
    dropDown: null,
  },
];

export default function IEContainer({ onCloseProject }) {
  return (
    <div className={style.ieContainer}>
      <div className={style.ie}>
        <Window
          onClose={onCloseProject}
          onHelp={function noRefCheck() {}}
          onMaximize={function noRefCheck() {}}
          onMinimize={function noRefCheck() {}}
          showClose
          showMaximize
          showMinimize
          title="Default Window"
        >
          <FileNav />
          <hr className={style.horiLine}></hr>
          {/* Utility Buttons */}
          <div className={style.utiContainer}>
            {utilityButtons.map((items, index) => (
              <div key={index} className={style.navUtilityContainer}>
                <div className={style.utiBtn}>
                  <img src={items.src} />
                  {items.title && (
                    <Typography className={style.utiText} variant="span">
                      {items.title}
                    </Typography>
                  )}
                  {items.dropDown && (
                    <img
                      style={{ width: "8px", height: "8px" }}
                      src={items.dropDown}
                    />
                  )}
                  {index === 4 && (
                    <div
                      style={{
                        borderLeft: "1px solid gray",
                        height: "20px",
                      }}
                    ></div>
                  )}
                  {index === 7 && (
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

          {/* url container */}
          <div>
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
                    <img
                      style={{ width: "14px", height: "14px" }}
                      src={folder}
                    />
                    <Typography variant="span">{`https://image-to-pdf-two.vercel.app/`}</Typography>
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
          </div>
          <div>
            <iframe
              className={style.siteContainer}
              src="https://image-to-pdf-two.vercel.app/"
            ></iframe>
          </div>
        </Window>
      </div>
    </div>
  );
}
