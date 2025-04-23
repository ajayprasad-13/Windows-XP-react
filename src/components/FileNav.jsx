import { Typography } from "react-windows-xp";
import style from "../styles/filenav.module.css";
import windowsIco from "../assets/windowsXPicon.png";

const navContent = ["File", "Edit", "View", "Favourite", "Tools", "Help"];

export default function FileNav() {
  return (
    <nav className={style.navContainer}>
      <div style={{ display: "flex" }}>
        {navContent.map((items) => (
          <div>
            <div className={style.navTextContainer}>
              <Typography variant="paragraph" className={style.navText}>
                {items}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div className={style.winIconCon}>
        <img className={style.winIcon} src={windowsIco} />
      </div>
    </nav>
  );
}
