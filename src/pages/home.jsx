const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1 className="header-text">
          I'm Kade, a <strong>Designer</strong> with a passion for{" "}
          <strong>Cybersecurity.</strong>
        </h1>
      </header>

      <section className="skills">
        <h2>Core Competencies</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Network Security</h3>
            <p>Firewalls, IDS/IPS, VPN, Threat Detection</p>
          </div>
          <div className="skill-card">
            <h3>Penetration Testing</h3>
            <p>OWASP, Burp Suite, Metasploit, Kali Linux</p>
          </div>
          <div className="skill-card">
            <h3>Incident Response</h3>
            <p>Forensics, Log Analysis, Security Audits</p>
          </div>
          <div className="skill-card">
            <h3>Compliance</h3>
            <p>GDPR, HIPAA, ISO 27001, SOC 2</p>
          </div>
        </div>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <p>Coming soon...</p>
      </section>
    </div>
  );
};

export default Home;
