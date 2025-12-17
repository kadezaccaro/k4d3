import React from "react";

const Contact = () => {
  return (
    <>
      <header className="contact-header">
        <h1 className="header-text">Contact</h1>
        <p>
          If you'd like to get in touch, please email{" "}
          <a href="mailto:hi@kadezaccaro.com">hi@kadezaccaro.com</a>.{" "}
          Alternatively, you may use the form below. I hope to hear from you
          soon!
        </p>
      </header>

      <form action="https://formsubmit.co/hi@kadezaccaro.com" method="POST">
        <input type="hidden" name="_captcha" value="false" />

        <input
          type="hidden"
          name="_subject"
          value="New contact form submission!"
        />

        <input
          type="hidden"
          name="_next"
          value="https://kadezaccaro.com/success"
        />

        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            style={{ height: 200 }}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit">
          Send message
        </button>
      </form>
    </>
  );
};

export default Contact;
