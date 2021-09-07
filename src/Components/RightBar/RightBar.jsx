import React from "react";
import "./RightBar.scss";

// theme
import useTheme from "../../Hooks/Theme";
// language
import { LangContext } from "../../Context/Lang";
import content from "../../Localization/Content";

import Search from "../../Assests/Images/search.svg";
import Settings from "../../Assests/Images/settings.svg";
import More from "../../Assests/Images/triple-dots.svg";

import Mushtariy from "../../Assests/Images/mushtariy.svg";
import Shuhrat from "../../Assests/Images/shuhrat.svg";

function RightBar() {
  const [theme] = useTheme();
  const { lang } = React.useContext(LangContext);

  return (
    <>
      <div className={`right-bar ${theme}`}>
        <div className="search-input-wrapper">
          <img
            className="search-icon"
            src={Search}
            alt="search"
            width={24}
            height={24}
          />
          <input
            className="search-input"
            type="text"
            placeholder={content[lang].search}
          />
        </div>

        <div className="trends-wrapper">
          <div className="trends-top-wrapper">
            <h3 className="trends-heading">{content[lang].trend}</h3>
            <button className="trends-btn">
              <img
                className="trends-img"
                src={Settings}
                alt="settings"
                width={24}
                height={24}
              />
            </button>
          </div>

          <div className="trends-info-wrapper">
            <div className="trends-info">
              <p className="trends-info-paragraph">Trending in Germany</p>
              <h4 className="trends-info-heading">Revolution</h4>
              <p className="trends-info-qty-paragraph">
                <span>50.4K</span> Tweets
              </p>
            </div>
            <button className="trends-info-more-btn">
              <img src={More} alt="more" width={17} height={4} />
            </button>
          </div>

          <div className="trends-info-wrapper">
            <div className="trends-info">
              <p className="trends-info-paragraph">Trending in Germany</p>
              <h4 className="trends-info-heading">Revolution</h4>
              <p className="trends-info-qty-paragraph">
                <span>50.4K</span> Tweets
              </p>
            </div>
            <button className="trends-info-more-btn">
              <img src={More} alt="more" width={17} height={4} />
            </button>
          </div>

          <div className="trends-info-wrapper">
            <div className="trends-info">
              <p className="trends-info-paragraph">Trending in Germany</p>
              <h4 className="trends-info-heading">Revolution</h4>
              <p className="trends-info-qty-paragraph">
                <span>50.4K</span> Tweets
              </p>
            </div>
            <button className="trends-info-more-btn">
              <img src={More} alt="more" width={17} height={4} />
            </button>
          </div>

          <button className="trends-show-more-btn">
            {content[lang].showmore}
          </button>
        </div>

        <div className="might-like-wrapper">
          <h3 className="might-like-heading">{content[lang].like}</h3>

          <div className="might-like-inner">
            <img
              className="might-like-img"
              src={Mushtariy}
              alt="Mushtariy"
              width={60}
              height={60}
            />

            <div className="might-like-user-wrapper">
              <p className="might-like-user-name">Mushtariy</p>
              <p className="might-like-user-mail">@Mushtar565266</p>
            </div>

            <button className="might-like-follow-btn">
              {content[lang].follow}
            </button>
          </div>

          <div className="might-like-inner">
            <img
              className="might-like-img"
              src={Shuhrat}
              alt="Shuhrat"
              width={60}
              height={60}
            />

            <div className="might-like-user-wrapper">
              <p className="might-like-user-name">Shuhratbek</p>
              <p className="might-like-user-mail">@mrshukhrat</p>
            </div>

            <button className="might-like-follow-btn">
              {content[lang].follow}
            </button>
          </div>

          <button className="might-like-show-more-btn">
            {content[lang].showmore}
          </button>
        </div>

        <div className="footer-bar">
          <ul className="footer-list">
            <li className="footer-item">{content[lang].terms}</li>
            <li className="footer-item">{content[lang].policy}</li>
            <li className="footer-item">{content[lang].cookie}</li>
            <li className="footer-item">{content[lang].imprint}</li>
            <li className="footer-item">{content[lang].ads}</li>
            <li className="footer-item">{content[lang].more} ···</li>
            <li className="footer-item">© 2021 Twitter, Inc.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default RightBar;
