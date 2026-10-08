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
            <h3 className="vertical-timeline-element-title">Payment Operations Analyst | Risk, Compliance & Transaction Review</h3>
            <h4 className="vertical-timeline-element-subtitle">Euronet Polska Sp. z o.o. • Poland</h4>
            <p>Review 400+ cases weekly against policy and procedure, analyze customer and payment data in Excel and SQL, investigate exceptions, document findings, perform quality checks, and support operational risk controls.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="05/2023 - 07/2024" iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }} icon={<FontAwesomeIcon icon={faBriefcase} />}>
            <h3 className="vertical-timeline-element-title">Operations Payment Analyst | Customer Risk & Fraud Investigations</h3>
            <h4 className="vertical-timeline-element-subtitle">Concentrix CVG International Sp. z o.o. • Poland</h4>
            <p>Investigated transaction and system incidents, identified irregularities and risk indicators, documented findings, escalated significant risks, and coordinated issue resolution with international financial stakeholders.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="01/2020 - 10/2021" iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }} icon={<FontAwesomeIcon icon={faBriefcase} />}>
            <h3 className="vertical-timeline-element-title">Payment Operations & Implementation Specialist | Transaction Monitoring & Risk Controls</h3>
            <h4 className="vertical-timeline-element-subtitle">Commercial Bank of Ethiopia (CBE) • Ethiopia</h4>
            <p>Processed and reviewed customer transactions, supported fraud and risk controls through transaction review and issue investigation, used transaction and financial data for operational decisions, and performed quality checks.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className="vertical-timeline-element--work" date="10/2021 - 07/2023" iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }} icon={<FontAwesomeIcon icon={faGraduationCap} />}>
            <h3 className="vertical-timeline-element-title">Education</h3>
            <h4 className="vertical-timeline-element-subtitle">MSc Management & Organization • Silesian University of Technology</h4>
            <p>Advanced education in management and organization supporting professional work in risk, compliance, payment operations and quality assurance.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
