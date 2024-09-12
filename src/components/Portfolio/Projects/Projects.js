import Project from "./Project";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Projects = ({openMenu}) => {
  const [projects] = useState([
    {
      id: 1,
      title: "RIVIAN LLC",
      description:
        "Validated hardware design of Rivian ECU’s using automated bare-metal Software Regression Application Frameworks. Integrated GNSS hardware testing across L1 and L5 bands into Rivian test suite using aarch64 demodulation and decoding. Performed antenna performance simulations on fluctuating antenna characteristics and vehicle dimensions.",
      link: "https://github.com/iamyajat/Smart-Bookmark-API",
      show: true,
    },
    {
      id: 2,
      title: "Brunswick Corporation",
      description:
        "Integrated LiDAR and Sonar system with a six stereo-camera array into software stack of Avator 48V Autonomous Boat. Collaborated on autonomous data injection system for ROS 2.0 data log packets for mass-training of real-time AI models. Architected and tested Arduino-based hardware and feedback controller for 2023 small-boat Brunswick project.",
      link: "https://play.google.com/store/apps/details?id=com.dscvit.wt21",
      show: true,
    },
    {
      id: 3,
      title: "MSAC and IPOC Research Group",
      description:
        "Led development of new electronics and hardware for new prototypes of piezoelectric spacecraft attitude control systems. Designed a PCB to act as a high-density power driver and 300 Volt full bridge rectifier with integrated gate drivers. Constructed a 2 mW communication system to stream serial data from nRF52840 integrated hardware to IoT devices.",
      link: "https://yazafit.iamyajat.co/",
      show: true,
    },
    {
      id: 4,
      title: "KIMLAB Research Group",
      description:
        "Led development of new electronics and hardware for new prototypes of piezoelectric spacecraft attitude control systems. Designed a PCB to act as a high-density power driver and 300 Volt full bridge rectifier with integrated gate drivers. Constructed a 2 mW communication system to stream serial data from nRF52840 integrated hardware to IoT devices.",
      link: "https://spaceweight.iamyajat.co/",
      show: true,
    },
    {
      id: 5,
      title: "ECE OpenLab",
      description:
        "Trained and mentored more than 700 lab users and 35 Registered Student Organizations with technical engineering projects. Reworked and machined new Reflow Oven for lab members, refurbished old Spot Welders and maintained 3D printers",
      link: "https://spaceweight.iamyajat.co/",
      show: true,
    },
    {
      id: 6,
      title: "ABCD: EFGHIJKLMG HIJKLMNOPQ RSTUVWXYZ",
      description: "",
      link: "",
      show: false,
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
