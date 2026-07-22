import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faServer, faHeadset } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Azure Virtual Machines",
    "Microsoft Entra ID",
    "Azure Networking",
    "Windows Server",
    "Active Directory",
    "PowerShell (Basic)"
];

const labelsSecond = [
    "Azure Administration",
    "Technical Support",
    "Incident Management",
    "Zendesk",
    "HaloITSM",
    "Microsoft 365"
];

const labelsThird = [
    "AZ-900",
    "CompTIA A+",
    "Cloud Infrastructure",
    "Troubleshooting",
    "Ticketing Systems",
    "IT Operations"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Core Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Azure & Cloud Infrastructure</h3>
                    <p>Focused on Azure administration, cloud support, and infrastructure basics including virtual machines, virtual networks, and identity management.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faHeadset} size="3x"/>
                    <h3>Support & Operations</h3>
                    <p>Experience troubleshooting user and system issues, documenting incidents, managing escalations, and coordinating resolutions with internal teams.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>IT Systems & Certifications</h3>
                    <p>Combines practical support experience with AZ-900 and CompTIA A+ knowledge to contribute to modern cloud and Windows-based environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Highlights:</span>
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