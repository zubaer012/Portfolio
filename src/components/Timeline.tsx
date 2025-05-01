import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education & Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2025"
            iconStyle={{ background: "#006747", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">USF</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Computer Science (B.S)
            </h4>
            <p>Tampa, FL</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Dhaka, BD</h4>
            <p>
              Python & REST API development, NATS distributed messaging, testing
              infrastructure
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer Intern (Platform and Data)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Dhaka, BD</h4>
            <p>
              Kafka & Spark ETL development, Spring Boot microservices, GraphQL
              gateway, Kubernetes deployment across AWS/GCP
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              IT Customer Support
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Tampa, FL</h4>
            <p>
              Hardware and network troubleshooting, print system monitoring with
              99% uptime, and customer support for 500+ users/month
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Research Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Tampa, FL</h4>
            <p>
              Researched evolutionary algorithms for adaptive systems and
              time-dependent optimization, and developed tech-supported
              strategies to overcome learning barriers in computing education
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
