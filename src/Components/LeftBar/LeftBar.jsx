import "./LeftBar.scss";

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
  return (
    <>
      <div className="left-bar">
        <div className="left-bar-inner">
          <a className="logo-link" href="#">
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
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    className="nav-icon"
                    src={Home}
                    alt="home"
                    width={28}
                    height={28}
                  />
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    className="nav-icon"
                    src={Explore}
                    alt="Explore"
                    width={28}
                    height={28}
                  />
                  Explore
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    className="nav-icon"
                    src={Notification}
                    alt="Notification"
                    width={28}
                    height={28}
                  />
                  Notification
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    className="nav-icon"
                    src={Messages}
                    alt="Messages"
                    width={28}
                    height={28}
                  />
                  Messages
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    className="nav-icon"
                    src={Bookmarks}
                    alt="Bookmarks"
                    width={28}
                    height={28}
                  />
                  Bookmarks
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    className="nav-icon"
                    src={Lists}
                    alt="Lists"
                    width={28}
                    height={28}
                  />
                  Lists
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    className="nav-icon"
                    src={Profile}
                    alt="Profile"
                    width={28}
                    height={28}
                  />
                  Profile
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    className="nav-icon"
                    src={More}
                    alt="More"
                    width={28}
                    height={28}
                  />
                  More
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
