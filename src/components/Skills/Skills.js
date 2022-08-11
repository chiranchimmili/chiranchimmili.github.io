import Marquee from "react-fast-marquee";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="sectionTitle">Skills</h2>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            <div className="skill--box">C++</div>
            <div className="skill--box">Python</div>
            <div className="skill--box">Java</div>
            <div className="skill--box">Linux</div>
            <div className="skill--box">React</div>
            <div className="skill--box">Kotlin</div>
            <div className="skill--box">JavaScript</div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
