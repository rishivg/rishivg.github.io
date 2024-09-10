const Education = () => {
  return (
    <div className="education-card">
      <h1 className="education-heading">Education</h1>
      <div className="education-info">
        <div className="school-info">
          <h2>University of Illinois at Urbana-Champaign</h2>
          <p>Champaign, IL</p>
          <br />
          <p style={{ "font-weight": "900" }}>
            Bachelor's in Computer Engineering
          </p>
          <p>September 2017 - May 2021</p>
          {/* <p>CGPA: </p> */}
        </div>
        <div className="school-info">
          <h2>Hopkins High School</h2>
          <p>New Haven, CT</p>
          <br />
          <br />
          <p style={{ "font-weight": "900" }}>
            Bachelor's in Computer Engineering
          </p>
          <p>September 2017 - May 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
