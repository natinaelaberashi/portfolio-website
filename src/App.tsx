import React, { useState } from 'react';
import './portfolio.scss';

const github = 'https://github.com/natinaelaberashi';
const projects = [
  {title:'Payment Product Operations Lab',category:'Payment operations',desc:'Payment-product operations materials including a dashboard folder, SQL scripts, sample data and documentation.',link:github+'/portfolio-website/tree/main/payment-product-operations-lab',tag:'Portfolio lab'},
  {title:'Data Analytics & Operations Lab',category:'Data analytics',desc:'Operations analytics materials with SQL, reporting resources, sample data and an HTML project page.',link:github+'/portfolio-website/tree/main/data-analytics-operations-lab',tag:'Portfolio lab'},
  {title:'Power BI Operations Dashboard',category:'Reporting & dashboards',desc:'Operations dashboard source files, SQL, sample data and a Power BI build guide.',link:github+'/portfolio-website/tree/main/power-bi-operations-dashboard',tag:'Portfolio lab'},
  {title:'Transaction / Transmission Operations Lab',category:'Transaction operations',desc:'Transaction operations portfolio materials including SQL, handover documentation and an HTML project page.',link:github+'/portfolio-website/tree/main/transmission-operations-analyst-lab',tag:'Portfolio lab'},
  {title:'Customer Support Analytics',category:'Transferable analytics',desc:'Operational case analytics with dashboard source files, SQL and sample data; included for transferable reporting skills.',link:github+'/portfolio-website/tree/main/customer-support-analytics',tag:'Existing project'},
  {title:'CloudDesk IT Support Ticket System',category:'Analytics application',desc:'Separate repository with an operational ticket analytics dashboard, sample data and a live-demo link.',link:github+'/cloud-desk-it-support',tag:'Existing repository'},
];
const jobs = [
  {date:'Oct 2025 — Present',role:'Customer Data & Business Performance Analyst',company:'Euronet · Poland',detail:'Customer data analysis, KPI monitoring, data accuracy checks and business performance reporting. Building basic SQL and Power BI skills.'},
  {date:'Aug 2024 — Oct 2025',role:'Operations Data & Reporting Specialist',company:'Euronet · Warsaw, Poland',detail:'Operational data reporting, transaction monitoring, data validation, reconciliation and performance tracking using Excel.'},
  {date:'Jul 2023 — Aug 2024',role:'Data Customer Operations & Performance Reporting Analyst',company:'Concentrix CVG · Poland',detail:'Customer performance reporting, KPI tracking, CRM data, Excel PivotTables and operational data quality.'},
  {date:'Sep 2022 — Jul 2023',role:'Customer Operations & Data Management Associate',company:'Concentrix CVG · Poland',detail:'Customer records, CRM data updates, case tracking, information verification and operational support.'}
];
const areas = [
  {num:'01',title:'Customer data management',desc:'CRM data accuracy, record validation and customer operations.'},
  {num:'02',title:'Business performance reporting',desc:'KPI monitoring, operational trends and management reporting.'},
  {num:'03',title:'Business intelligence',desc:'Developing SQL and Power BI skills for reporting and visualization.'},
  {num:'04',title:'Data analytics & insights',desc:'Excel analysis, data quality and continued Python learning.'}
];
function App(){
 const [menu,setMenu]=useState(false);
 const [filter,setFilter]=useState('All');
 const categories=['All','Payment operations','Data analytics','Reporting & dashboards','Transaction operations','Transferable analytics','Analytics application'];
 const shown=filter==='All'?projects:projects.filter(p=>p.category===filter);
 return <div className="site">
  <a className="skip" href="#main">Skip to main content</a>
  <header className="topbar"><div className="wrap nav">
    <a className="brand" href="#home" aria-label="Natinael Abera Shibeshi, home"><span className="brand-mark">NA.</span><span>Natinael <b>Shibeshi</b></span></a>
    <button className="menu-toggle" type="button" aria-expanded={menu} aria-controls="site-links" onClick={()=>setMenu(!menu)}>{menu?'Close':'Menu'} <span aria-hidden="true">{menu?'×':'☰'}</span></button>
    <nav id="site-links" aria-label="Main navigation" className={menu?'links open':'links'}>
     {['About','Expertise','Experience','Projects','Education','Contact'].map(s=><a key={s} href={'#'+s.toLowerCase()} onClick={()=>setMenu(false)}>{s}</a>)}
    </nav>
   </div></header>
  <main id="main">
   <section className="hero" id="home"><div className="wrap hero-grid">
    <div><p className="eyebrow"><span className="pulse" aria-hidden="true"></span> OPEN TO JUNIOR DATA & ANALYTICS OPPORTUNITIES · POLAND</p>
     <h1>Customer data.<br/><em>Business insights.</em><br/>Data-driven growth.</h1>
     <p className="hero-lead">I'm <strong>Natinael Abera Shibeshi</strong> — a Customer Data & Business Performance Analyst with an MSc in Management and an Engineering background, developing skills in data analytics and business intelligence.</p>
     <div className="actions"><a className="primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a><a className="secondary" href="#contact">Get in touch <span aria-hidden="true">→</span></a></div>
     <div className="hero-meta"><span>Customer analytics</span><span>Business reporting</span><span>Excel · SQL & Python learning</span></div>
    </div>
    <aside className="hero-panel" aria-label="Professional snapshot">
     <div className="panel-head"><span>PROFILE / AT A GLANCE</span><span className="panel-dot" aria-hidden="true">✦</span></div>
     <div className="metric"><strong>4+ <small>years</small></strong><span>Customer operations and business reporting</span></div>
     <div className="metric"><strong>Excel</strong><span>Operational reporting and data validation</span></div>
     <div className="metric"><strong>SQL <small>· basic</small></strong><span>Developing analytical skills</span></div><div className="panel-rule"></div>
     <p className="panel-label">CURRENT FOCUS</p><p className="panel-focus">Customer data <span>↗</span> Reporting <span>↗</span> BI <span>↗</span> Analytics</p>
     <p className="panel-foot">MSc Management & Organization · Engineering background</p>
    </aside>
   </div><div className="hero-index wrap"><span>01 / INTRODUCTION</span><span>SCROLL TO EXPLORE ↓</span></div></section>
   <section className="section about" id="about"><div className="wrap split"><div><p className="kicker">01 — ABOUT</p><h2>Connecting customer operations with <em>data insights.</em></h2></div><div className="body-copy"><p>My experience at Concentrix and Euronet includes customer data management, operational reporting, KPI monitoring, record validation and business performance support.</p><p>With an MSc in Management & Organization and an Engineering background, I am developing SQL, Python and Power BI skills for junior data analytics and business intelligence opportunities.</p><p className="note">Professional experience and developing academic specializations are presented separately throughout this portfolio.</p></div></div></section>
   <section className="section expertise" id="expertise"><div className="wrap"><div className="section-head"><div><p className="kicker">02 — EXPERTISE</p><h2>Where operations <em>meet analytics.</em></h2></div><p>Customer and business operations experience, complemented by a developing analytical toolkit.</p></div><div className="expertise-grid">{areas.map(a=><article className="area" key={a.num}><span className="area-num">{a.num} / FOCUS AREA</span><h3>{a.title}</h3><p>{a.desc}</p><span className="area-arrow" aria-hidden="true">↗</span></article>)}</div><div className="skill-strip"><span>Microsoft Excel</span><span>CRM data</span><span>Data validation</span><span>KPI reporting</span><span>SQL (basic)</span><span>Power BI (basic)</span><span>Python (learning)</span></div></div></section>
   <section className="section experience" id="experience"><div className="wrap"><div className="section-head"><div><p className="kicker">03 — EXPERIENCE</p><h2>Progressing from customer operations <em>to data analytics.</em></h2></div></div><div className="timeline">{jobs.map(j=><article className="job" key={j.role}><span className="job-date">{j.date}</span><div><h3>{j.role}</h3><p className="company">{j.company}</p><p>{j.detail}</p></div><span className="job-symbol" aria-hidden="true">↗</span></article>)}</div></div></section>
   <section className="section projects" id="projects"><div className="wrap"><div className="section-head"><div><p className="kicker">04 — SELECTED WORK</p><h2>Projects & <em>explorations.</em></h2></div><p>Explore the repositories and project materials. Each card links to real work, rather than an invented case study.</p></div>
   <div className="filters" role="group" aria-label="Filter projects">{categories.map(c=><button type="button" aria-pressed={filter===c} className={filter===c?'filter active':'filter'} key={c} onClick={()=>setFilter(c)}>{c}</button>)}</div>
   <div className="project-grid">{shown.map((p,i)=><article className="project-card" key={p.title}><div className="project-top"><span>{p.category.toUpperCase()}</span><span>0{i+1}</span></div><div className="project-visual" aria-hidden="true"><span className="visual-bars"><i/><i/><i/><i/><i/><i/><i/></span><span className="visual-cross">✳</span></div><div className="project-info"><span className="project-tag">{p.tag}</span><h3>{p.title}</h3><p>{p.desc}</p><a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={'View '+p.title+' on GitHub'}>View repository <span aria-hidden="true">↗</span></a></div></article>)}</div>
   <p className="project-disclaimer">Portfolio demonstrations are separate from employment experience. Any sample datasets should be synthetic and contain no confidential employer or customer information.</p>
   <a className="text-link" href={github} target="_blank" rel="noopener noreferrer">Explore all GitHub repositories <span aria-hidden="true">↗</span></a>
   </div></section>
   <section className="section education" id="education"><div className="wrap"><p className="kicker">05 — EDUCATION</p><div className="section-head"><h2>Always <em>learning.</em></h2></div><div className="edu-grid"><article><span className="edu-label">2017 — 2021</span><h3>Bachelor's in Engineering</h3><p>Addis Ababa University · Ethiopia</p><span>Completed</span><p className="edu-desc">Analytical thinking, mathematics and problem-solving.</p></article><article><span className="edu-label">2021 — 2023</span><h3>MSc Management & Organization</h3><p>Silesian University of Technology · Poland</p><span>Completed</span><p className="edu-desc">Graduate studies in management and organizational practice.</p></article></div></div></section>
   <section className="contact-section" id="contact"><div className="wrap contact-grid"><div><p className="kicker">06 — LET'S CONNECT</p><h2>Let's turn insight <em>into impact.</em></h2><p>Open to Junior Data Analyst, Junior Insight Analyst, Junior Modelling Analyst, Reporting Analyst, Business Analyst and Junior BI Analyst opportunities. I'd be glad to connect.</p><a className="primary" href="mailto:shibnatabera@gmail.com">Email me <span aria-hidden="true">↗</span></a></div><div className="contact-links"><a href="mailto:shibnatabera@gmail.com"><span>Email</span><strong>shibnatabera@gmail.com</strong><b aria-hidden="true">↗</b></a><a href="https://www.linkedin.com/in/natinael-abera-shibeshi-8077b826b" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><strong>Connect professionally</strong><b aria-hidden="true">↗</b></a><a href={github} target="_blank" rel="noopener noreferrer"><span>GitHub</span><strong>Explore repositories</strong><b aria-hidden="true">↗</b></a></div></div></section>
  </main>
  <footer><div className="wrap footer"><span>© {new Date().getFullYear()} Natinael Abera Shibeshi</span><span>CUSTOMER DATA · BUSINESS REPORTING · ANALYTICS</span><a href="#home">Back to top ↑</a></div></footer>
 </div>;
}
export default App;
