import React from 'react';
import './style.scss';

function Services({ data }) {
  if (!Array.isArray(data) || data.length === 0) return null;

  return (
    <section className="services">
      <h3 className="services__title">Services</h3>
      <div className="services__container">
        {data.map(service => (
          <div key={service.id} className="services-card">
            <div className="services-card__body">
              <h4 className="services-card__title">{service.title}</h4>
              <p className="services-card__content">{service.content}</p>
              <button className="services-card__view-detail-btn">
                <span>See Details</span>
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

            <div className="services-card__footer">
              <span className="services-card__price">
                Starting at ${service.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
