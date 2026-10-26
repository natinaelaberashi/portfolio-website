import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Financial Analytics & Risk Focus</h1>
        <div className="projects-grid">
            <div className="project">
                <h2>Fraud & Transaction Analytics</h2>
                <p>Analytical focus: investigate transaction patterns, exceptions and potential fraud indicators. Portfolio case studies will use synthetic data.</p>
            </div>
            <div className="project">
                <h2>Credit Risk Analytics</h2>
                <p>Developing specialization in credit risk assessment, credit portfolio metrics and data-driven risk monitoring through Data Science studies.</p>
            </div>
            <div className="project">
                <h2>Payment Operations & Data Analysis</h2>
                <p>Professional experience in transaction validation, payment controls and exception investigation, supported by Excel and SQL analysis.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;