import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="/profile.jpg" alt="Natinael Shibeshi" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="mailto:shibeshinatinaelabera@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://www.linkedin.com/in/natinael-abera" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Natinael Shibeshi</h1>
          <p>Azure Cloud Engineer | Cloud Support | Azure Infrastructure</p>
          <p>
            IT professional with experience in technical support, systems support, and IT operations.
            AZ-900 and CompTIA A+ certified with knowledge of Azure Virtual Machines, Microsoft Entra ID,
            Azure networking, Windows Server, and cloud infrastructure.
          </p>

          <div className="contact-details">
            <p><LocationOnIcon /> Warsaw, Poland</p>
            <p><EmailIcon /> shibeshinatinaelabera@gmail.com</p>
            <p><PhoneAndroidIcon /> +48 539 783 189</p>
          </div>

          <div className="mobile_social_icons">
            <a href="mailto:shibeshinatinaelabera@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://www.linkedin.com/in/natinael-abera" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;