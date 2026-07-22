import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Azure Projects & Experience</h1>
        <div className="projects-grid">
            <div className="project">
                <h2>Azure Administration Labs</h2>
                <p>Deployed and configured Azure Virtual Machines, Virtual Networks, and Microsoft Entra ID users and groups through hands-on Azure administration labs.</p>
            </div>
            <div className="project">
                <h2>Cloud Support & Troubleshooting</h2>
                <p>Resolved technical issues across Windows environments and Microsoft applications, documented solutions, and managed escalations in ticket-based support operations.</p>
            </div>
            <div className="project">
                <h2>Systems & Identity Support</h2>
                <p>Supported Windows systems, Active Directory, user accounts, and basic networking while managing incidents through HaloITSM.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;