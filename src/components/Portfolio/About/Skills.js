import { useState } from "react";

const Skills = () => {
  const [certifications] = useState([
    "Languages/Middleware: C, C++, Rust, Python, Haskell, OCaml, RISCV, SystemVerilog, Chisel, ROS 2.0",
    "Tools: Vivado, Cocotb, UVM, Verilator, ANSYS, Altium Designer, LTSpice, KiCAD, ModelSim, Cadence",
    "Manufacturing: Spot Welding, CNC Mill, Laser Mill, Laser Cutter, Drill Press, 3D Printer, Lathe, Waterjet",
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
