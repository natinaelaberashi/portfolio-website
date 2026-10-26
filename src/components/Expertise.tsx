import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faServer, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Payment Processing",
    "Payment Validation",
    "Payment Status Monitoring",
    "Transaction Analysis",
    "Payment Exception Investigation",
    "Payment Discrepancies"
];

const labelsSecond = [
    "Operational Controls",
    "Exception Reporting",
    "Transaction Review",
    "Data Quality",
    "Issue Investigation",
    "Audit Documentation"
];

const labelsThird = [
    "Microsoft Excel",
    "SQL",
    "Operational Documentation",
    "Reporting",
    "Process Improvement",
    "Stakeholder Communication"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Core Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Payment & Banking Operations</h3>
                    <p>Experience processing and validating transactions, monitoring payment status, investigating exceptions and resolving discrepancies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faClipboardCheck} size="3x"/>
                    <h3>Risk & Fraud Analytics</h3>
                    <p>Building on payment controls and transaction investigations to develop skills in fraud patterns, credit risk assessment and financial risk analytics.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Controls:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Data Analytics & Data Science</h3>
                    <p>Uses Excel and SQL for transaction analysis and reporting; pursuing a second master's degree in Data Science to deepen statistical and predictive analytics skills.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
