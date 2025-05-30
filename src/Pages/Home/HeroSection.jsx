export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hello I am Junyoung</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Software</span>{" "}
              <br />
              Engineer
            </h1>
            <p className="hero--section-description">
              I am a passionate Engineer and a senior majoring in
              <br /> Computer Science and Information Systems 
              <br /> Double Degree at The University of Hong Kong.
            </p>
          </div>
          <a href="./img/Junyoung_Bae_CV.pdf" download>
          <button className="btn btn-primary">Resume</button>
          </a>
          
          <a href="https://www.linkedin.com/in/junyoung-bae-042b5a1a4/" target="_blank">
          <button className="btn btn-primary resume-button">Linkedin</button>
          </a>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </section>
    );
  }
