import React from 'react';
import './style.scss';

function OurTeam({ data }) {
  if (!Array.isArray(data) || data.length === 0) return null;

  return (
    <section className="our-team">
      <h3 className="our-team__title">Our Team</h3>
      <h4 className="our-team__intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </h4>

      <div className="our-team__container">
        {data.map((member, idx) => (
          <div key={member.id} className="member-card">
            <div className="member-card__image">
              <img src={member.image} alt={member.name} />
            </div>
            <div
              className={`member-card__content ${
                (idx + 1) % 2 === 0 ? 'right' : 'left'
              }`}
            >
              <span className="member-card__name">{member.name}</span>
              <span className="member-card__role">{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
