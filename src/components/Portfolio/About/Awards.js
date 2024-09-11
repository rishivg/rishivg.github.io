import { useState } from "react";

const Awards = () => {
const [certifications] = useState([
    "NAR Level 2 HPR Certified",
    "Amateur Extra Ham Radio VEC",
    "FAA Remote Pilot",
    "NHSCA Academic All American",
    "2024 - 3rd place Distinguished Robotics Exhibit Award at EOH",
    "2023 - 1st place Distinguished Robotics Exhibit Award at EOH",
    "2023 - 1st place Best Demonstration of a STEM Principle Award at EOH",
    "2023 - 2nd place Spirit of Innovation Award at EOH"
]);


return (
    <div className="skills-card">
    <h1 className="cert-heading">Awards and Certifications</h1>
    <ul className="cert-list">
        {certifications.map((certification) => (
        <li className="cert-content">▪ {certification}</li>
        ))}
    </ul>
    </div>
);
};

export default Awards;
  