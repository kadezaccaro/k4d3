import { NavLink, Link } from "react-router-dom";

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
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="footerSection">
          <h3>Elsewhere</h3>
          <div className="socialLinks">
            <ul>
              <li>
                <a href="https://www.github.com/" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
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
