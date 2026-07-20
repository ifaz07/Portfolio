import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a final year Computer Science student at BRAC University, graduating
          in 2026 with a GPA of 3.90. I learn by building, so most of my degree has
          gone into shipping things that had to actually work: full stack
          platforms, REST APIs, ML pipelines, and an A+ thesis on hallucination
          detection in Bangla language models.
        </p>
      </div>
    </div>
  );
};

export default About;
