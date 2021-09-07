import React from "react";
import "./LeftBar.scss";

// theme
import useTheme from "../../Hooks/Theme";
// lang
import content from "../../Localization/Content";
import { LangContext } from "../../Context/Lang";

// images
import Logo from "../../Assests/Images/logo.svg";
import Home from "../../Assests/Images/home.svg";
import Explore from "../../Assests/Images/explore.svg";
import Notification from "../../Assests/Images/notification.svg";
import Messages from "../../Assests/Images/messages.svg";
import Bookmarks from "../../Assests/Images/bookmarks.svg";
import Lists from "../../Assests/Images/lists.svg";
import Profile from "../../Assests/Images/profile.svg";
import More from "../../Assests/Images/more.svg";
import User from "../../Assests/Images/user.svg";
import Dots from "../../Assests/Images/triple-dots.svg";

function LeftBar() {
  const [theme] = useTheme();
  const { lang } = React.useContext(LangContext);
  return (
    <>
      <div className={`left-bar ${theme}`}>
        <div className="left-bar-inner">
          <a className="logo-link" href="#link">
            <img
              className="logo"
              src={Logo}
              alt="blue bird"
              width={40}
              height={33}
            />
          </a>

          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item ">
                <a className="nav-link" href="#link">
                  <img
                    className="nav-icon"
                    src={Home}
                    alt="home"
                    width={28}
                    height={28}
                  />
                  {content[lang].home}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#link">
                  <img
                    className="nav-icon"
                    src={Explore}
                    alt="Explore"
                    width={28}
                    height={28}
                  />
                  {content[lang].explore}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#link">
                  <img
                    className="nav-icon"
                    src={Notification}
                    alt="Notification"
                    width={28}
                    height={28}
                  />
                  {content[lang].notification}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#link">
                  <img
                    className="nav-icon"
                    src={Messages}
                    alt="Messages"
                    width={28}
                    height={28}
                  />
                  {content[lang].messages}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#link">
                  <img
                    className="nav-icon"
                    src={Bookmarks}
                    alt="Bookmarks"
                    width={28}
                    height={28}
                  />
                  {content[lang].bookmarks}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#link">
                  <img
                    className="nav-icon"
                    src={Lists}
                    alt="Lists"
                    width={28}
                    height={28}
                  />
                  {content[lang].lists}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#link">
                  <img
                    className="nav-icon"
                    src={Profile}
                    alt="Profile"
                    width={28}
                    height={28}
                  />
                  {content[lang].profile}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#link">
                  <img
                    className="nav-icon"
                    src={More}
                    alt="More"
                    width={28}
                    height={28}
                  />
                  {content[lang].more}
                </a>
              </li>

              <button className="nav-btn" type="button">
                Tweet
              </button>
            </ul>
          </nav>

          <div className="user-wrapper">
            <img
              className="user-img"
              src={User}
              alt="user"
              width={50}
              height={50}
            />
            <div className="user-inner">
              <p className="user-name">Bobur</p>
              <a className="user-mail" href="@bobur_mavlonov">
                @bobur_mavlonov
              </a>
            </div>
            <img
              className="dots"
              src={Dots}
              alt="three dots"
              width={17}
              height={4}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftBar;
