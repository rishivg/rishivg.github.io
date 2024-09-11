import {
  SiPython,
  SiTensorflow,
  SiAndroid,
  SiAndroidstudio,
  SiKotlin,
  SiJava,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { useState } from "react";

const Skills = () => {
  const [certifications] = useState([
    "Languages/Middleware: C, C++, Rust, Python, Kotlin, Scala, Haskell, OCaml, x86, ARM, Verilog, VDHL, ROS 2.0",
    "Computer Aided Design: Solidworks, Siemens NX, ANSYS, Autodesk Fusion 360, Creo, Abaqus, Altium, KiCAD",
    "Manufacturing: Spot Welding, Reflow, CNC Mill, Laser Mill, Laser Cutter, Drill Press, 3D Printer, Lathe, Waterjet",
    "Development: Agile, Jira, Trello, Git, Confluence, Teams, Asana, Slack, Azure, AWS, Bitbucket, Bluespec, Docker",
  ]);

  const [skills] = useState([
    <SiPython data-tip="Python" className="ic-but" />,
    <SiTensorflow data-tip="Tensorflow" className="ic-but" />,
    <SiAndroid data-tip="Android Appdev" className="ic-but" />,
    <SiAndroidstudio data-tip="Android Studio" className="ic-but" />,
    <SiKotlin data-tip="Kotlin" className="ic-but" />,
    <SiJava data-tip="Java" className="ic-but" />,
    <SiHtml5 data-tip="HTML5" className="ic-but" />,
    <SiCss3 data-tip="CSS3" className="ic-but" />,
    <SiJavascript data-tip="JavaScript" className="ic-but" />,
    <SiReact data-tip="React" className="ic-but" />,
    <SiCplusplus data-tip="C++" className="ic-but" />,
    <SiC data-tip="C" className="ic-but" />,
  ]);

  return (
    <div className="skills-card">
      <h1 className="cert-heading">Skills</h1>
      <ul className="cert-list">
        {certifications.map((certification) => (
          <li className="cert-content">▪ {certification}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
