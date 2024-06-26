import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../AppContext/AppContext";
import emailjs from "emailjs-com";

const Contact = () => {
  const { themeColor, showToggle, showToggleForheader } =
    useContext(AppContext);

  const [contactMessage, setContactMessage] = useState(""); // Use state for message
  // ============= EMAIL JS ================
  const contactForm = useRef(null);
  const contactMessageRef = useRef(null); // Ref for the DOM element

  const sendEmail = (e) => {
    e.preventDefault();

    //serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_cv0ad2n",
        "template_698dyv9",
        "#contact-form",
        "lcsm-Y0vlna16UkZ8"
      )
      .then(() => {
        // Show sent message (update state)
        setContactMessage("Message sent successfully ✅");

        // Remove message after five seconds (update state)
        setTimeout(() => {
          setContactMessage("");
        }, 4000);

        contactForm.current.reset();
      })

      .catch((error) => {
        // Show error message (update state)
        setContactMessage("Message failed to send (Service Error) ❌");

        // Remove message after five seconds (update state)
        setTimeout(() => {
          setContactMessage("");
        }, 5000);

        console.error("Error sending email:", error);
      });
  };

  useEffect(() => {
    if (contactForm.current) {
      contactForm.current.addEventListener("submit", sendEmail);
    }
    return () => {
      if (contactForm.current) {
        contactForm.current.removeEventListener("submit", sendEmail);
      }
    };
  }, [contactMessage]);
  // contactForm.addEventListener("submit", sendEmail);

  return (
    <div id="contact" className={`${themeColor ? "dark-theme" : ""} `}>
      <section
        onClick={showToggle ? () => showToggleForheader() : undefined}
        className="contact section"
      >
        <h2 className="section__title">
          Let's Talk <br />
          About Your Project
        </h2>

        <div className="contact__page container grid">
          <form
            action=""
            className="contact__form grid"
            id="contact-form"
            ref={contactForm}
          >
            <div className="contact__group grid">
              <div className="contact__box">
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  placeholder="Write your names"
                  className="contact__input"
                />
                <label htmlFor="message" className="contact__label">
                  First Name
                </label>
              </div>

              <div className="contact__box">
                <input
                  type="text"
                  name="user_email"
                  id="email"
                  required
                  placeholder="Write your email"
                  className="contact__input"
                />
                <label htmlFor="message" className="contact__label">
                  Email Address
                </label>
              </div>
            </div>

            <div className="contact__box contact__area">
              <textarea
                name="user_message"
                id="message"
                required
                placeholder="Write your message"
                className="contact__input"
              ></textarea>
              <label htmlFor="message" className="contact__label">
                Message
              </label>
            </div>

            <p
              className="contact__message"
              ref={contactMessageRef}
              id="contact-message"
            ></p>
            <button
              onClick={sendEmail}
              type="submit"
              className="contact__send button"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
