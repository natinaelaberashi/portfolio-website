import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faServer, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "KYC / CDD",
    "AML/CFT",
    "Sanctions Screening",
    "Transaction Monitoring",
    "Fraud Investigation",
    "Risk Assessment"
];

const labelsSecond = [
    "Operational Risk",
    "Key Risk Indicators",
    "Control Testing",
    "Quality Assurance",
    "Root Cause Analysis",
    "Issue Validation"
];

const labelsThird = [
    "Microsoft Excel",
    "SQL",
    "Case Documentation",
    "Audit Trails",
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
                    <h3>Risk, Compliance & Financial Crime</h3>
                    <p>Experience supporting transaction review, KYC/CDD, AML/CFT, sanctions screening, fraud investigation and risk assessment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faClipboardCheck} size="3x"/>
                    <h3>Quality Assurance & Controls</h3>
                    <p>Focused on quality checks, control testing, issue validation, operational risk indicators and complete investigation records.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Controls:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Payment Operations & Analytics</h3>
                    <p>Combines payment operations, transaction analysis, case documentation and data analysis to identify exceptions and support process improvement.</p>
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
