import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required placeholder="John Doe" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required placeholder="you@example.com" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows={5} required placeholder="How can I help you?" />
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;