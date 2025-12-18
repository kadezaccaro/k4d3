import { Mail, Copy } from "lucide-react";

const EmailCTA = () => {
  return (
    <div className="cta-container">
      <div className="cta-text">
        <h1 className="lets-create">Get in touch...</h1>
        <p>I look forward to hearing from you!</p>
      </div>

      <div className="cta-buttons">
        <a href="mailto:hi@kadezaccaro.com" className="email-button">
          <Mail size={24} color="#f9b110" />
          hi@kadezaccaro.com
        </a>

        <div className="tooltip">
          <Copy size={24} />
          <span className="tooltip-text">Copy email to clipboard</span>
        </div>
      </div>
    </div>
  );
};

export default EmailCTA;
