import React from "react";

const Skills = () => {
  return (
    <section className="skills scroll">
      <div className="inner">
        {/* 기술적 역량: 기술적 내용설명,자격증,운전면허 등..  */}
        <h2>Skills</h2>
        <div className="contents">
          <ul className="skills-list">
            <li>
              <img
                src="/images/skill-html.png"
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="300"
              />
            </li>
            <li>
              <img
                src="/images/skill-css.png"
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="400"
              />
            </li>
            <li>
              <img
                src="/images/skill-js.png"
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="500"
              />
            </li>
            <li>
              <img
                src="/images/skill-react.png"
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="600"
              />
            </li>
            <li>
              <img
                src="/images/skill-git.png"
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="700"
              />
            </li>
            <li>
              <img
                src="/images/skill-redux.png"
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="800"
              />
            </li>
            <li>
              <img
                src="/images/skill-figma.png"
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="900"
              />
            </li>
            <li>
              <img
                src="/images/skill-type.png"
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="1000"
              />
            </li>
            <li>
              <img
                src="/images/skill-sass.png"
                alt="skill"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="1100"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
