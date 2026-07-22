import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="08/2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Customer Operations & Support Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">Euronet Polska Sp. z o.o. • Warsaw, Poland</h4>
            <p>
              Troubleshoot user and system issues, manage support cases in Zendesk, document incidents, and coordinate resolutions with internal teams.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="05/2024 - 08/2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technical Support Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">FedEx • Poland</h4>
            <p>
              Provided technical troubleshooting, managed escalations, and documented resolutions for customer and internal support cases.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="07/2023 - 07/2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technical Support Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">Concentrix CVG International Sp. z o.o. • Poland</h4>
            <p>
              Supported Windows environments, Microsoft applications, and user issues through ticket-based troubleshooting and documented technical solutions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="08/2020 - 10/2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Systems Support Officer</h3>
            <h4 className="vertical-timeline-element-subtitle">Ethio Canadian Business Group • Addis Ababa</h4>
            <p>
              Supported Windows systems, Active Directory, user accounts, and basic networking while managing IT incidents through HaloITSM.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Education</h3>
            <h4 className="vertical-timeline-element-subtitle">MSc Management & Organization • Silesian University of Technology</h4>
            <p>
              BSc Civil Engineering • Addis Ababa University
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;