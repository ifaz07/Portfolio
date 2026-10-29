import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import {
  EMAIL,
  GMAIL_COMPOSE,
  GITHUB_URL,
  LINKEDIN_URL,
  LEETCODE_URL,
  PHONE,
  PHONE_HREF,
  RESUME_PATH,
} from "../data/contact";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Get in touch</h4>
            <p>
              <a
                href={GMAIL_COMPOSE}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                {EMAIL}
              </a>
            </p>
            <p>
              <a href={`tel:${PHONE_HREF}`} data-cursor="disable">
                {PHONE}
              </a>
            </p>
            <p>Dhaka, Bangladesh</p>
            <h4>Education</h4>
            <p>
              BSc in Computer Science, BRAC University, graduated June 2026 ·
              GPA 3.90/4.0
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href={LEETCODE_URL}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
            <a
              href={GMAIL_COMPOSE}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by{" "}
              <span>Mohammad Ifaz Alamgir</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
