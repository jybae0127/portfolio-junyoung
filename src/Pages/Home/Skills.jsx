import data from "../../data/index.json";

//import styles from './SkillsStyles.module.css';


import SkillList from './SkillList';

export default function Skills() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="section--heading">My Expertise</h2>
        </div>
      </div>
      <div className="portfolio--container">
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
              <p className="skills--section--description--two">{item.skills}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <section id="skills" className={styles.container}>
      <div className={styles.skillList}>
        <SkillList src="./img/checkmark-light.svg" skill="HTML" />
        <SkillList src="./img/checkmark-light.svg" skill="CSS" />
        <SkillList src="./img/checkmark-light.svg" skill="JavaScript" />
        <SkillList src="./img/checkmark-light.svg" skill="TypeScript" />
        <SkillList src="./img/checkmark-light.svg" skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src="./img/checkmark-light.svg" skill="React" />
        <SkillList src="./img/checkmark-light.svg" skill="Angular" />
        <SkillList src="./img/checkmark-light.svg" skill="Vue" />
        <SkillList src="./img/checkmark-light.svg" skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src="./img/checkmark-light.svg" skill="Redux" />
        <SkillList src="./img/checkmark-light.svg" skill="Webpack" />
        <SkillList src="./img/checkmark-light.svg" skill="Git" />
        <SkillList src="./img/checkmark-light.svg" skill="Jest" />
        <SkillList src="./img/checkmark-light.svg" skill="Bootstrap" />
      </div>
      </section> */}
    
    </section>
    
    
  );
}