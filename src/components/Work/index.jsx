import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './style.scss';

function Work() {
  const [showAll, setShowAll] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width <= 576;
  const numberItems = isMobile && !showAll ? 3 : 6;

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <section className="work">
      <div className="work__container">
        <h3 className="work__title">Work</h3>

        <div className="work__card-container">
          {[...Array(numberItems).keys()].map(x => (
            <div key={x} className="work-card">
              <div className="work-card__image">
                <img src={`/assets/images/image-${x + 1}.png`} alt="" />
              </div>
              <div
                className={`work-card__content ${
                  (x + 1) % 2 === 0 ? 'right' : 'left'
                }`}
              >
                <h4 className="work-card__title">Abstract Design</h4>
                <p className="work-card__desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. orem
                  ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit.
                </p>
                <button className="work-card__view-btn">
                  <span>See Project</span>
                  <svg
                    width="33"
                    height="21"
                    viewBox="0 0 33 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.949219 10.3248H30.763M30.763 10.3248L22.0176 1.57935M30.763 10.3248L22.0176 19.4676"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {isMobile && !showAll && (
          <button
            className="work__show-all-btn"
            onClick={() => setShowAll(true)}
          >
            See All
          </button>
        )}
      </div>
    </section>
  );
}

export default Work;
