import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({openMenu}) => {
  const [blogs] = useState([
    {
      id: 1,
      title: "OOOreo RV32IM processor",
      description:
        "Implemented an out-of-order 2-wide superscalar RISC-V processor in SystemVerilog capable of executing 32-bit RISC-V instructions out-of-order, featuring a split LSQ, a stride prefetcher, and an advanced TAGE branch predictor.",
      link: "",
      show: true,
    },
    {
      id: 2,
      title: "IOSDR",
      description:
        " Created an open-source software-defined FPGA radio hardware platform that supports dual multichannel transmission and reception, Gigabit Ethernet connection, Embedded Linux SoC development and GNU Radio blocks.",
      link: "",
      show: true,
    },
    {
      id: 3,
      title: "SHA256-AXI4-Accelerator",
      description:
        "Created a VHDL design for a pipelined SHA256 hardware accelerator block that is AXI4 Compliant. Synthesized and Mapped for the Zynq7020 SoC with an accompanying test bench and verification.",
      link: "",
      show: true,
    },
    {
      id: 1,
      title: "Illinois Space Society HW",
      description:
        " Installed 433 Mhz RF communication between rocket and ground station via Adafruit Feathers with LoRa Transceivers, Contributed to the Spaceshot Project’s ground station GUI, directed development of embedded Full-Duplex amplifier frontend, and implemented Software-Defined Reciever into rocket stack + more.",
      link: "",
      show: true,
    },
    {
      id: 1,
      title: "Illinois Space Society SW",
      description:
        " Installed 433 Mhz RF communication between rocket and ground station via Adafruit Feathers with LoRa Transceivers, Contributed to the Spaceshot Project’s ground station GUI, directed development of embedded Full-Duplex amplifier frontend, and implemented Software-Defined Reciever into rocket stack + more.",
      link: "",
      show: true,
    },
    {
      id: 4,
      title: "Drone Inverted Pendulum",
      description:
        "Prototyped Hardware and Feedback Controllers to balance stick on a CrazyFlie Drone for Illinois Engineering Open House Exhibit.",
      link: "",
      show: true,
    },
    {
      id: 5,
      title: "Mobile Robotics",
      description:
        "Designed and manufactured power distribution and communication circuit boards for EOH Autonomous Robotics Project.",
      link: "",
      show: true,
    },
    {
      id: 6,
      title: "Eco Illini Supermileage",
      description:
        " Developed a Controller Area Network subsystem to connect STM32 Microcontroller to peripheral devices for telemetry. Machined an eco fuel injection system for the Supermileage G5 car engine and designed system to test injector flow rate.",
      link: "",
      show: true,
    }
  ]);

  return (
    <>
      <div className={`portfolio-section opened-menu-${openMenu}`}>
        <div className="card-view">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Blogs;
