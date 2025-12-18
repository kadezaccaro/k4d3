import { NavLink, Link } from "react-router-dom";
import { ExternalLink, Heart } from "lucide-react";

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
              <NavLink to="/">Home</NavLink>
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
                <a
                  href="https://www.github.com/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Visit github.com (opens in a new tab)"
                >
                  GitHub <ExternalLink size={17} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Visit instagram.com (opens in a new tab)"
                >
                  Instagram <ExternalLink size={17} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Visit linkedin.com (opens in a new tab)"
                >
                  LinkedIn <ExternalLink size={17} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>&copy; {currentYear} K4D3</p>
        <p>Coded from scratch with &#9825;</p>
      </div>
    </footer>
  );
};

export default Footer;
