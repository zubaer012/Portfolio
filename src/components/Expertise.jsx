import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Python",
  "C",
  "C++",
  "C#",
  "Go",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Redux",
  "Node.js",
  "Express",
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "Flask",
  "SQL",
  "PostgreSQL",
  "GraphQL",
  "AQL",
];

const labelsSecond = [
  "Git",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Linux",
  "Jenkins",
  "Jira",
  "Confluence",
  "ArangoDB",
];

const labelsThird = [
  "OpenAI",
  "Groq",
  "LangChain",
  "Qdrant",
  "Hugging Face",
  "LlamaIndex",
  "Streamlit",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Software and Fullstack Development</h3>
            <p>
              I have built software applications using Python and Java with a
              variety of frameworks and libraries, as well as a diverse range of
              web applications from scratch using modern technologies like React
              and Flask. I am skilled in both frontend and backend development
              and bring a strong foundation in designing and delivering
              full-stack solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              Once the application is built, I help clients set up DevOps
              testing, CI/CD pipelines, and deployment automation to support the
              successful Go-Live.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>GenAI & LLMs</h3>
            <p>
              Stay relevant in the market by leveraging the latest AI models in
              your projects. I have experience building enterprise grade
              GenAI-enabled solutions to empower intelligent decision making.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
