import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import bgDark from "../assets/images/bg-dark.png";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        {/* Decorative dark image as a separate element */}
        <img src={bgDark} alt="" className="bg-overlay-image" />

        <div className="image-wrapper">
          <img
            src="https://raw.githubusercontent.com/zubaer012/misc-assets/profile/headshot.png"
            alt="Avatar"
          />
        </div>

        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/zubaer012"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/zubaermilky/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>

          <h1>Zubaer Milky</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/zubaer012"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/zubaermilky/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
