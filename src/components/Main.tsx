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
          <img src="/profile.jpg" alt="Natinael Abera Shibeshi" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="mailto:shibnatabera@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://www.linkedin.com/in/natinael-abera-shibeshi-8077b826b" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Natinael Abera Shibeshi</h1>
          <p>Risk, Compliance & Quality Assurance Analyst | KYC/AML | Fraud Investigations | Payment Operations</p>
          <p>
            Risk and compliance professional with 3+ years of experience across banking and payment operations.
            Experienced in transaction review, exception investigation, fraud and risk controls, quality checks,
            root-cause analysis, case documentation, and operational process improvement. Strong in Excel and SQL,
            with a focus on accurate investigations, policy adherence, audit-ready documentation, and risk escalation.
          </p>

          <div className="contact-details">
            <p><LocationOnIcon /> Poland</p>
            <p><EmailIcon /> shibnatabera@gmail.com</p>
            <p><PhoneAndroidIcon /> +48 539 783 189</p>
          </div>

          <div className="mobile_social_icons">
            <a href="mailto:shibnatabera@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://www.linkedin.com/in/natinael-abera-shibeshi-8077b826b" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
