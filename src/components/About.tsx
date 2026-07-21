import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a Computer Science graduate from BRAC University, finishing in June, 2026
          with a CGPA of 3.90. I learn by building, so most of my degree went into
          shipping things that had to actually work: full stack platforms, REST
          APIs, ML pipelines, and an A+ thesis on hallucination detection in
          Bangla language models.
        </p>
      </div>
    </div>
  );
};

export default About;
