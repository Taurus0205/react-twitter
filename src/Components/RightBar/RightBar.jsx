import "./RightBar.scss";

import Search from "../../Assests/Images/search.svg";
import Settings from "../../Assests/Images/settings.svg";
import More from "../../Assests/Images/triple-dots.svg";

import Mushtariy from "../../Assests/Images/mushtariy.svg";
import Shuhrat from "../../Assests/Images/shuhrat.svg";

function RightBar() {
  return (
    <>
      <div className="right-bar">
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
            placeholder="Search Twitter"
          />
        </div>

        <div className="trends-wrapper">
          <div className="trends-top-wrapper">
            <h3 className="trends-heading">Trends for you</h3>
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

          <button className="trends-show-more-btn">Show more</button>
        </div>

        <div className="might-like-wrapper">
          <h3 className="might-like-heading">You might like</h3>

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

            <button className="might-like-follow-btn">Follow</button>
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

            <button className="might-like-follow-btn">Follow</button>
          </div>

          <button className="might-like-show-more-btn">Show more</button>
        </div>

        <div className="footer-bar">
          <ul className="footer-list">
            <li className="footer-item">Terms of Service</li>
            <li className="footer-item">Privacy Policy</li>
            <li className="footer-item">Cookie Policy</li>
            <li className="footer-item">Imprint</li>
            <li className="footer-item">Ads Info</li>
            <li className="footer-item">More ···</li>
            <li className="footer-item">© 2021 Twitter, Inc.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default RightBar;
