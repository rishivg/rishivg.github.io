import Education from "./Education"
import Info from "./Info"
import Skills from "./Skills"
import Awards from "./Awards"
import ReactTooltip from "react-tooltip";

const About = ({openMenu}) => {
  return (
    <div className={`portfolio-section opened-menu-${openMenu}`}>
      <Info />
      <Education />
      <Skills />
      <Awards />
      <ReactTooltip place="bottom" className="tooltip" />
    </div>
  );
};

export default About;
