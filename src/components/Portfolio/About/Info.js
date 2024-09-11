import profile_pic from "../../../assets/images/profile.jpg";
import {
  FaLinkedinIn,
  FaGithub,
  FaKaggle,
} from "react-icons/fa";
const Info = () => {
  return (
    <div className="info-card">
      <div className="profile-img">
        <img className="profile-pic" src={profile_pic} alt="Yajat Malhotra"/>
      </div>
      <div className="about-me">
        <h1>Rishi Gottumukkala</h1>
        <br />
        <p className="profile-description">
        Hi! Im Rishi, and I am currently a Senior at the University of Illinois at 
        Urbana-Champaign pursuing a bachelor's degree in Computer 
        Engineering. My interests lie in the fields of ASIC Design, 
        FPGA Development, Embedded Firmware and Mobile Robotics.
        </p>
        <br />
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/rishi-gottumukkala/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="social-icon"
            href="https://github.com/rishivg"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
