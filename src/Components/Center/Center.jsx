import "./Center.scss";
import Light from "../../Assests/Images/light.svg";
import User from "../../Assests/Images/user.svg";
import Designsta from "../../Assests/Images/designsta.svg";
import Cloutex from "../../Assests/Images/cloutex.svg";
import Creative from "../../Assests/Images/creative.svg";
import More from "../../Assests/Images/triple-dots.svg";
import Lunch from "../../Assests/Images/obed.jpg";

// btn icons
import Image from "../../Assests/Btn-icons/image.svg";
import Gif from "../../Assests/Btn-icons/gif.svg";
import Stats from "../../Assests/Btn-icons/stats.svg";
import Smile from "../../Assests/Btn-icons/smile.svg";
import Date from "../../Assests/Btn-icons/date.svg";

// comment btn
import Comment from "../../Assests/Btn-icons/comment.svg";
import Retweet from "../../Assests/Btn-icons/retweet.svg";
import Like from "../../Assests/Btn-icons/like.svg";
import Share from "../../Assests/Btn-icons/share.svg";
import Statistics from "../../Assests/Btn-icons/statistics.svg";

function Center() {
  return (
    <>
      <div className="center ">
        <div className="center-top">
          <h2 className="center-top__heading">Home</h2>
          <button className="center-top__btn">
            <img
              className="center-top__img"
              src={Light}
              alt="light dark button"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* input part */}
        <div className="input-wrapper">
          <img
            className="input__img"
            src={User}
            alt="user"
            width={60}
            height={60}
          />
          <div className="input-inner">
            <input
              className="input"
              type="text"
              placeholder="What's happening"
            />

            <div className="input-bar">
              <div className="input-bar__btn-wrapper">
                <button className="input-bar-btn">
                  <img
                    className="input-bar-btn-img"
                    src={Image}
                    alt="send photo"
                    width={24}
                    height={24}
                  />
                </button>

                <button className="input-bar-btn">
                  <img
                    className="input-bar-btn-img"
                    src={Gif}
                    alt="send gif"
                    width={24}
                    height={24}
                  />
                </button>

                <button className="input-bar-btn">
                  <img
                    className="input-bar-btn-img"
                    src={Stats}
                    alt="statistics"
                    width={24}
                    height={24}
                  />
                </button>

                <button className="input-bar-btn">
                  <img
                    className="input-bar-btn-img"
                    src={Smile}
                    alt="emoticons"
                    width={24}
                    height={24}
                  />
                </button>

                <button className="input-bar-btn">
                  <img
                    className="input-bar-btn-img"
                    src={Date}
                    alt="date"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <button className="input-tweet-btn">Tweet</button>
            </div>
          </div>
        </div>

        {/* commnets part */}
        <div className="comment">
          <img
            className="comment-user-img"
            src={Designsta}
            alt="designsta"
            width={60}
            height={60}
          />
          <div className="comment-inner">
            <p className="comment-user-paragraph">
              <span className="comment-user-name">Desingsta</span>
              <span className="comment-user-email">@inner</span>·
              <span className="comment-last-seen">25m</span>
            </p>
            <p className="comment-paragraph">
              Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
              zerikmadinglarmi?
            </p>

            <div className="comment-bar">
              <div>
                <button className="comment-bar-btn">
                  <img src={Comment} alt="comment" width={24} height={24} />
                </button>
                <span className="comment-bar-span">10</span>
              </div>

              <div>
                <button className="comment-bar-btn">
                  <img src={Retweet} alt="retweet" width={24} height={24} />
                </button>
                <span className="comment-bar-span">1</span>
              </div>

              <div>
                <button className="comment-bar-btn">
                  <img src={Like} alt="like" width={24} height={24} />
                </button>
                <span className="comment-bar-span">8</span>
              </div>

              <button className="comment-bar-btn">
                <img src={Share} alt="share" width={24} height={24} />
              </button>

              <button className="comment-bar-btn">
                <img src={Statistics} alt="statistics" width={24} height={24} />
              </button>
            </div>
          </div>
          <button className="comment-more-btn">
            <img src={More} alt="more" width={17} height={4} />
          </button>
        </div>

        {/* second comment */}
        <div className="comment">
          <img
            className="comment-user-img"
            src={Cloutex}
            alt="Cloutex"
            width={60}
            height={60}
          />
          <div className="comment-inner">
            <p className="comment-user-paragraph">
              <span className="comment-user-name">cloutexhibition</span>
              <span className="comment-user-email">@RajLahoti</span>·
              <span className="comment-last-seen">22m</span>
            </p>
            <p className="comment-paragraph">
              YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
              Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini
              ko’rib hursand bo’ladi odam.
            </p>

            <div className="comment-bar">
              <div>
                <button className="comment-bar-btn">
                  <img src={Comment} alt="comment" width={24} height={24} />
                </button>
                <span className="comment-bar-span"></span>
              </div>

              <div>
                <button className="comment-bar-btn">
                  <img src={Retweet} alt="retweet" width={24} height={24} />
                </button>
                <span className="comment-bar-span">5</span>
              </div>

              <div>
                <button className="comment-bar-btn">
                  <img src={Like} alt="like" width={24} height={24} />
                </button>
                <span className="comment-bar-span">9</span>
              </div>

              <button className="comment-bar-btn">
                <img src={Share} alt="share" width={24} height={24} />
              </button>

              <button className="comment-bar-btn">
                <img src={Statistics} alt="statistics" width={24} height={24} />
              </button>
            </div>
          </div>
          <button className="comment-more-btn">
            <img src={More} alt="more" width={17} height={4} />
          </button>
        </div>

        {/* third comment */}
        <div className="comment">
          <img
            className="comment-user-img"
            src={Creative}
            alt="Creative"
            width={60}
            height={60}
          />
          <div className="comment-inner">
            <p className="comment-user-paragraph">
              <span className="comment-user-name">CreativePhoto</span>
              <span className="comment-user-email">@cloutexhibition</span>·
              <span className="comment-last-seen">1h</span>
            </p>
            <p className="comment-paragraph">Обетда..... Кечиринглар</p>
            <img
              className="comment-img"
              src={Lunch}
              alt="lunch"
              width={679}
              height={453}
            />

            <div className="comment-bar">
              <div>
                <button className="comment-bar-btn">
                  <img src={Comment} alt="comment" width={24} height={24} />
                </button>
                <span className="comment-bar-span">10</span>
              </div>

              <div>
                <button className="comment-bar-btn">
                  <img src={Retweet} alt="retweet" width={24} height={24} />
                </button>
                <span className="comment-bar-span">1</span>
              </div>

              <div>
                <button className="comment-bar-btn">
                  <img src={Like} alt="like" width={24} height={24} />
                </button>
                <span className="comment-bar-span">8</span>
              </div>

              <button className="comment-bar-btn">
                <img src={Share} alt="share" width={24} height={24} />
              </button>

              <button className="comment-bar-btn">
                <img src={Statistics} alt="statistics" width={24} height={24} />
              </button>
            </div>
          </div>
          <button className="comment-more-btn">
            <img src={More} alt="more" width={17} height={4} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Center;
