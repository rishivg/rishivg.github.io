import { useState } from "react";

const Skills = () => {
  const [certifications] = useState([
    "Languages/Middleware: C, C++, Rust, Python, Kotlin, Scala, Haskell, OCaml, x86, ARM, Verilog, VDHL, ROS 2.0",
    "Computer Aided Design: Solidworks, Siemens NX, ANSYS, Autodesk Fusion 360, Creo, Abaqus, Altium, KiCAD",
    "Manufacturing: Spot Welding, Reflow, CNC Mill, Laser Mill, Laser Cutter, Drill Press, 3D Printer, Lathe, Waterjet",
    "Development: Agile, Jira, Trello, Git, Confluence, Teams, Asana, Slack, Azure, AWS, Bitbucket, Bluespec, Docker",
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
