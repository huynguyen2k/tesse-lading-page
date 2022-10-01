import React from 'react';
import './style.scss';

function Contact() {
  return (
    <section className="contact">
      <div className="contact__container">
        <h3 className="contact__title">Contact</h3>
        <h4 className="contact__email">contact@website.com</h4>
        <h4 className="contact__phone-number">+0 0000 0000</h4>

        <ul className="social-list">
          <li className="social-list__item">
            <a href="/" className="social-list__link">
              Twitter
            </a>
          </li>
          <li className="social-list__item">
            <a href="/" className="social-list__link">
              LinkedIn
            </a>
          </li>
          <li className="social-list__item">
            <a href="/" className="social-list__link">
              Dribbble
            </a>
          </li>
          <li className="social-list__item">
            <a href="/" className="social-list__link">
              YouTube
            </a>
          </li>
          <li className="social-list__item">
            <a href="/" className="social-list__link">
              Instagram
            </a>
          </li>
          <li className="social-list__item">
            <a href="/" className="social-list__link">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
