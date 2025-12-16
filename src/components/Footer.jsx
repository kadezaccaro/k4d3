const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footerContent">
        <div className="footerSection">
          <h2>K4D3&trade;</h2>
          <p>
            A graphic designer & coder passionate about well-designed
            experiences with close attention to detail.
          </p>
        </div>

        <div className="footerSection">
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footerSection">
          <h3>Elsewhere</h3>
          <div className="socialLinks">
            <ul>
              <li>
                <a href="#github" aria-label="GitHub">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#instagram" aria-label="Instagram">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#linkedin" aria-label="LinkedIn">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>K4D3 &copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
