import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Pdf from "../../data/ChiranjeeviResume.pdf";
import "./Intro.css";
const Intro = () => {

  const onResumeClick = () => {
    window.open(Pdf)
  }

  return (
    <div className="intro">
      <h1 className = "introName"> Hey! I'm Chiranjeevi Chimmili </h1>
      <div id="avatar"> </div>

      <h1 className="introTitle">
        Computer Science and Math Student at Georgia Tech 🐝
      </h1>
      <p className="introDescription">
        This website is currently a work in progress. Please check back soon!{" "}
      </p>
    
      <div className="introLinks">
        <a href= {Pdf} target= "_blank">
          <span type="button" className="btn btn--outline">
            Resume
          </span>
        </a>
        <a
          href={"https://github.com/chiranchimmili"}
          aria-label="github"
          className="link link--icon"
        >
          <GitHubIcon />
        </a>
        <a
          href={"https://www.linkedin.com/in/chiranc/"}
          aria-label="linkedin"
          className="link link--icon"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default Intro;
