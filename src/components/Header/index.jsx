import React from 'react';
import { useState } from 'react';
import './style.scss';

function Header() {
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  return (
    <header className={`${showCloseIcon ? 'header fixed' : 'header'}`}>
      <div className="header__container">
        <div className="header__logo">
          <a className="header__logo-link" href="/">
            LOGO
          </a>
        </div>

        <ul
          className={`${
            showCloseIcon ? 'header__nav mobile-active' : 'header__nav'
          }`}
        >
          <li className="header__nav-item">
            <a className="header__nav-link" href="/">
              WORK
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="/">
              SERVICES
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="/">
              CONTACT
            </a>
          </li>
        </ul>

        {!showCloseIcon && (
          <span
            className="header__menu-icon"
            onClick={() => setShowCloseIcon(true)}
          >
            <svg
              width="22"
              height="12"
              viewBox="0 0 22 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.379639 0.988129H21.4083"
                stroke="white"
                strokeWidth="1.05704"
              />
              <path
                d="M0.379639 5.74481H21.4083"
                stroke="white"
                strokeWidth="1.05704"
              />
              <path
                d="M0.379639 10.5015H21.4083"
                stroke="white"
                strokeWidth="1.05704"
              />
            </svg>
          </span>
        )}

        {showCloseIcon && (
          <span
            className="header__close-icon"
            onClick={() => setShowCloseIcon(false)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7 17.3C19.1 17.7 19.1 18.3 18.7 18.7C18.5 18.9 18.3 19 18 19C17.7 19 17.5 18.9 17.3 18.7L12 13.4L6.7 18.7C6.5 18.9 6.3 19 6 19C5.7 19 5.5 18.9 5.3 18.7C4.9 18.3 4.9 17.7 5.3 17.3L10.6 12L5.3 6.7C4.9 6.3 4.9 5.7 5.3 5.3C5.7 4.9 6.3 4.9 6.7 5.3L12 10.6L17.3 5.3C17.7 4.9 18.3 4.9 18.7 5.3C19.1 5.7 19.1 6.3 18.7 6.7L13.4 12L18.7 17.3Z"
                fill="white"
              />
              <mask
                id="mask0_5049_7"
                maskUnits="userSpaceOnUse"
                x="5"
                y="5"
                width="14"
                height="14"
              >
                <path
                  d="M18.7 17.3C19.1 17.7 19.1 18.3 18.7 18.7C18.5 18.9 18.3 19 18 19C17.7 19 17.5 18.9 17.3 18.7L12 13.4L6.7 18.7C6.5 18.9 6.3 19 6 19C5.7 19 5.5 18.9 5.3 18.7C4.9 18.3 4.9 17.7 5.3 17.3L10.6 12L5.3 6.7C4.9 6.3 4.9 5.7 5.3 5.3C5.7 4.9 6.3 4.9 6.7 5.3L12 10.6L17.3 5.3C17.7 4.9 18.3 4.9 18.7 5.3C19.1 5.7 19.1 6.3 18.7 6.7L13.4 12L18.7 17.3Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_5049_7)">
                <rect width="24" height="24" fill="white" />
              </g>
            </svg>
          </span>
        )}
      </div>
    </header>
  );
}

export default Header;
