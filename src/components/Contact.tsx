import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <>
      {/* ── STICKY FOOTER BAR (always visible at bottom) ── */}
      <div className="contact-sticky-bar">
        <a
          href="mailto:aryantripathi198@gmail.com"
          className="contact-sticky-email"
          data-cursor="disable"
        >
          aryantripathi198@gmail.com
        </a>
        <a
          href="#contact"
          className="contact-sticky-cta"
          data-cursor="disable"
        >
          Get in touch <MdArrowOutward />
        </a>
      </div>

      {/* ── FULL CONTACT SECTION ── */}
      <div className="contact-section section-container" id="contact">
        <div className="contact-footer-inner">
          <div className="contact-footer-left">
            <span className="contact-footer-label">Contact</span>

            <div className="contact-form-container">
              <h2>Let's Talk</h2>
              <p>Have a project in mind? Let's build something together.</p>
              <form className="contact-form">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Tell me about your project" rows={4} required></textarea>
                </div>
                <button type="submit" className="form-submit">
                  Send Message <MdArrowOutward />
                </button>
              </form>
            </div>
          </div>
          <div className="contact-footer-right">
            <p>Designed & Developed by <span>Aryan Tripathi</span></p>
            <span className="contact-footer-copy"><MdCopyright /> 2026</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
