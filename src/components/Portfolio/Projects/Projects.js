import Project from "./Project";
import { useState } from "react";

const Projects = ({openMenu}) => {
  const [projects] = useState([
        {
      id: 1,
      title: "Micronova LLC",
      description: "Developed high-performance FPGA and embedded signal-processing pipelines for ultrasonic NDT/inspection systems. Architected and integrated low-latency real-time data acquisition/transfer systems while meeting strict latency targets. Built mission-critical perception + tracking compute on FPGA/SoC platforms for ADAS detection autonomy.",
      link: "",
      show: true,
    },
    {
      id: 2,
      title: "CesiumAstro Inc.",
      description: "Tested and validated RX backplane PCBs for Skylark Ka-band SATCOM terminal flat-panel AESA phased array module. Invented RF, Digital, and Power software testing suite to control DVT and acceptance testing on PolarFire FPGA boards. Designed Receive and Transmit Tile Control Unit PCBs for Low Earth and Geosynchronous Orbit Element Satellites.",
      link: "",
      show: true,
    },
    {
      id: 3,
      title: "RIVIAN LLC",
      description: "Validated hardware design of Rivian ECU’s using automated bare-metal Software Regression Application Frameworks. Integrated GNSS hardware testing across L1 and L5 bands into Rivian test suite using aarch64 demodulation and decoding. Performed antenna performance simulations on fluctuating antenna characteristics and vehicle dimensions.",
      link: "",
      show: true,
    },
    {
      id: 4,
      title: "Brunswick Corporation",
      description: "Integrated LiDAR and Sonar system with a six stereo-camera array into software stack of Avator 48V Autonomous Boat. Collaborated on autonomous data injection system for ROS 2.0 data log packets for mass-training of real-time AI models. Architected and tested Arduino-based hardware and feedback controller for 2023 small-boat Brunswick project.",
      link: "",
      show: true,
    },
    {
      id: 5,
      title: "MSAC Research Group",
      description: "Led development of new electronics and hardware for new prototypes of piezoelectric spacecraft attitude control systems. Designed a PCB to act as a high-density power driver and 300 Volt full bridge rectifier with integrated gate drivers. Constructed 2 mW communication system to stream data from nRF52840 integrated hardware to IoT devices.",
      link: "",
      show: true,
    },
    {
      id: 6,
      title: "KIMLAB Research Group",
      description: "Machining and Constructing a novel leg-wheel transformer robot incorporating a monocycle chassis mechanism with two 3 DoF legs. Working on improving both the finite state machine and brake steering controller in ROS.",
      link: "",
      show: true,
    },
    {
      id: 7,
      title: "ECE OpenLab",
      description: "Trained and mentored more than 700 lab users and 35 Registered Student Organizations with technical engineering projects. Reworked and machined new Reflow Oven for lab members, refurbished old Spot Welders and maintained 3D printers.",
      link: "",
      show: true,
    },
    {
      id: 8,
      title: "IOT Lab",
      description: "",
      link: "",
      show: true,
    },
  ]);

  return (
    <>
      <div className={`portfolio-section opened-menu-${openMenu}`}>
        <div className="card-view">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}; 
export default Projects;
