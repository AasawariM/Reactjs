import "./Hero.css";
import pause from "../../assets/pause.png";
import play from "../../assets/play.png";
import right from "../../assets/right.png";

const Hero = ({
  heroData,
  heroCount,
  setHeroCount,
  playStatus,
  setPlayStatus,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        {/* display hero Data (object) as per hero Count , like if herCount is 0 display first object.. */}
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={right} alt="arrow btn" width="50px" />
      </div>
      <div className="hero-dot-play">
        {/* as we click on hero dots change bg and text as per heroCount */}
        <ul className="hero-dots">
          <li
            onClick={() => {
              setHeroCount(0); //when we click on first dot , set hero count to 0
            }}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => {
              setHeroCount(1); //when we click on 2nd dot , set hero count to 1
            }}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => {
              setHeroCount(2); //when we click on 3rd dot , set hero count to 2
            }}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        {/*  */}
        <div className="hero-play">
          {/* if playStatus is true means video is playing so add pause icon and if
          playStatus is false provide the play icon */}
          <img
            onClick={() => {
              setPlayStatus(!playStatus); //if playStatus is true set false and vice-versa
            }}
            src={playStatus ? pause : play}
            alt="pause play icons"
            width="60px"
          />
          <p>See the Video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
