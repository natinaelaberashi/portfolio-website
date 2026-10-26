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
          <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }} contentArrowStyle={{ borderRight: '7px solid  white' }} date="08/2024 - Present" iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }} icon={<FontAwesomeIcon icon={faBriefcase} />}>
            <h3 className="vertical-timeline-element-title">Payment Operations Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Euronet Polska Sp. z o.o. • Poland</h4>
            <p>Process and validate 400+ transactions/cases weekly, monitor payment status, investigate failed and delayed payments, resolve discrepancies, maintain records and use Excel and SQL for payment controls.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="05/2023 - 07/2024" iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }} icon={<FontAwesomeIcon icon={faBriefcase} />}>
            <h3 className="vertical-timeline-element-title">Operations Payment Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Concentrix CVG International Sp. z o.o. • Poland</h4>
            <p>Processed and validated financial transactions, investigated payment discrepancies and exceptions, and coordinated resolution with international financial stakeholders.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="01/2020 - 10/2021" iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }} icon={<FontAwesomeIcon icon={faBriefcase} />}>
            <h3 className="vertical-timeline-element-title">Banking Operations | Payment Operations & Implementation Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">Commercial Bank of Ethiopia (CBE) • Ethiopia</h4>
            <p>Worked with international market operations systems and financial data, supported transaction issue resolution and operational controls, and maintained accurate records.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="10/2021 - 07/2023" iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }} icon={<FontAwesomeIcon icon={faGraduationCap} />}>
            <h3 className="vertical-timeline-element-title">Education</h3>
            <h4 className="vertical-timeline-element-subtitle">MSc Management & Organization • Silesian University of Technology</h4>
            <p>Advanced education in management and organization supporting work in financial and payment operations.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }} icon={<FontAwesomeIcon icon={faGraduationCap} />}>
            <h3 className="vertical-timeline-element-title">Second Master's Degree — Data Science (In Progress)</h3>
            <p>Developing data analysis and statistical skills for financial analytics, credit risk and fraud analytics. Institution and start date to be confirmed.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
