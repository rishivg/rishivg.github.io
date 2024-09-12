import { useState } from "react";
import { FaMediumM } from "react-icons/fa";
import Blog from "./Blog";

const Blogs = ({openMenu}) => {
  const [blogs] = useState([
    {
      id: 1,
      title: "Illinois Space Society",
      description:
        " Installed 433 Mhz RF communication between rocket and ground station via Adafruit Feathers with LoRa Transceivers, Contributed to the Spaceshot Project’s ground station GUI, directed development of embedded Full-Duplex amplifier frontend, and implemented Software-Defined Reciever into rocket stack + more.",
      link: "https://www.illinoisspacesociety.org/",
      show: true,
    },
    {
      id: 2,
      title: "IOSDR",
      description:
        " Created an open-source software-defined FPGA radio hardware platform that supports dual multichannel transmission and reception, Gigabit Ethernet connection, Embedded Linux SoC development and GNU Radio blocks.",
      link: "https://github.com/rishivg/IO-SDR",
      show: true,
    },
    {
      id: 3,
      title: "SHA256-AXI4-Accelerator",
      description:
        "Created a VHDL design for a pipelined SHA256 hardware accelerator block that is AXI4 Compliant. Synthesized and Mapped for the Zynq7020 SoC with an accompanying test bench and verification.",
      link: "https://github.com/rishivg/SHA256-AXI4-Accelerator",
      show: true,
    },
    {
      id: 4,
      title: "Drone Inverted Pendulum",
      description:
        "Prototyped Hardware and Feedback Controllers to balance stick on a CrazyFlie Drone for Illinois Engineering Open House Exhibit.",
      link: "https://iamyajat.medium.com/intuition-for-gans-generative-adversarial-networks-beginner-friendly-4f38af40b9e1",
      show: true,
    },
    {
      id: 5,
      title: "Mobile Robotics",
      description:
        "Designed and manufactured power distribution and communication circuit boards for EOH Autonomous Robotics Project.",
      link: "https://iamyajat.medium.com/intuition-for-gans-generative-adversarial-networks-beginner-friendly-4f38af40b9e1",
      show: true,
    },
    {
      id: 5,
      title: "Eco Illini Supermileage",
      description:
        " Developed a Controller Area Network subsystem to connect STM32 Microcontroller to peripheral devices for telemetry. Machined an eco fuel injection system for the Supermileage G5 car engine and designed system to test injector flow rate.",
      link: "https://iamyajat.medium.com/intuition-for-gans-generative-adversarial-networks-beginner-friendly-4f38af40b9e1",
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
