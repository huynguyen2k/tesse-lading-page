import React from 'react';
import './style.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h4 className="footer__copy-right">2022 Creatives</h4>

        <div className="footer__policy">
          <span className="footer__policy-item">Privacy Policy</span>
          <span className="footer__policy-item">Terms and Conditions</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
