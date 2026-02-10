import "./Background.css";
import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const Background = ({ heroCount, playStatus }) => {
  if (playStatus) {
    return (
      // if playStatus is true , return video tag(play video)
      <video className="background" autoPlay muted loop>
        <source src={video1} title="video/mp4"></source>
      </video>
    );
  }
  // check if heroCount is 0,then provide image 1 as background image
  else if (heroCount === 0) {
    return <img src={image1} className="background" alt="image 1" />;
  }
  // if heroCount is 1,background image will be image2
  else if (heroCount === 1) {
    return <img src={image2} className="background" alt="image 2" />;
  }
  // if heroCount is 2,background image will be image3
  else if (heroCount === 2) {
    return <img src={image3} className="background" alt="image 3" />;
  }
};

export default Background;
