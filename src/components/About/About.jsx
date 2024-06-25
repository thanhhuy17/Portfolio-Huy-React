import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";

const About = () => {
  const {showToggle, showToggleForheader} = useContext(AppContext)

  return (
    <div id="about">
      <div onClick={showToggle?showToggleForheader:''} className="about section">
        <h2 className="section__title">
          My Personal <br />
          Information
        </h2>

        <div className="about__container about__page container grid">
          <div className="about__perfil perfil">
            <div className="perfil__content">              
              <img
                src={"./img/home-perfilV1.png"}
                alt="image"
                className="perfil__img"
              />
            </div>
          </div>

          <div className="about__content grid">
            <div className="about__data grid">
              <div className="about__info grid">
                <h1 className="about_name">Nguyễn Thanh Huy</h1>
                <h2 className="about_profession">
                  Database Management
                  <br /> Web Programming
                </h2>
                <p className="about__description">
                  Passionate about creating <b>Web Pages</b> with
                  <b>UI/UX User Interface</b>, I have <b>2</b> years of
                  experience and many clients are happy with the projects
                  carried out.
                </p>
              </div>
              <a href="contact.html" className="about__button button">
                Contact Me
              </a>
            </div>

            <div className="about__skills">
              <h3 className="about__skills-title">My Skills Are</h3>
              <div className="about__skills-content grid">
                <img
                  src="./img/about-html.svg"
                  alt="image"
                  className="about__skills-img"
                />
                <img
                  src="./img/about-css.svg"
                  alt="image"
                  className="about__skills-img"
                />
                <img
                  src="./img/about-javascript.svg"
                  alt="image"
                  className="about__skills-img"
                />
                <img
                  src="./img/about-git.svg"
                  alt="image"
                  className="about__skills-img"
                />
                <img
                  src="./img/about-react.svg"
                  alt="image"
                  className="about__skills-img"
                />
                <img
                  src="./img/about-github.svg"
                  alt="image"
                  className="about__skills-img"
                />
                <img
                  src="./img/about-next-js.svg"
                  alt="image"
                  className="about__skills-img"
                />
                <img
                  src="./img/about-sass.svg"
                  alt="image"
                  className="about__skills-img"
                />
                <img
                  src="./img/about-tailwind-css.svg"
                  alt="image"
                  className="about__skills-img"
                />
                <img
                  src="./img/about-figma.svg"
                  alt="image"
                  className="about__skills-img"
                />
                <img
                  src="./img/about-sketch.svg"
                  alt="image"
                  className="about__skills-img"
                />
                <img
                  src="./img/about-photoshop.svg"
                  alt="image"
                  className="about__skills-img"
                />
                <img
                  src="./img/about-illustrator.svg"
                  alt="image"
                  className="about__skills-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
