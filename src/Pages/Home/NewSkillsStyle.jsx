import React from 'react';
import './skillsStyles.css';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__title">Programming</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">Java</h3>
                  <span className="skills__level">Proficient</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">C</h3>
                  <span className="skills__level">Proficient</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">C++</h3>
                  <span className="skills__level">Proficient</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__level">Proficient</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__level">Proficient</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">SQL</h3>
                  <span className="skills__level">Proficient</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills__content">
          <h3 className="skills__title">Frameworks/Technologies</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name skills_tech">Node.js</h3>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name skills_tech">React.js</h3>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name skills_tech">Redux</h3>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name skills_tech">Express.js</h3>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name skills_tech">jQuery</h3>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name skills_tech">Bootstrap</h3>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name skills_tech">Git</h3>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name skills_tech">Linux</h3>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name skills_tech">MongoDB</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
