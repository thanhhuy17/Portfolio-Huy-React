import { useEffect } from "react";
import { useState } from "react";

// eslint-disable-next-line react/no-unescaped-entities
// eslint-disable-next-line react/prop-types
const Home = ({ themeColor, setThemeColor }) => {
  //Change Background Header
  const [bgHeader, setBgheader] = useState(false);
  const changeBackgroundColor = () => {
    let moving = window.scrollY;
    if (moving > 88) {
      setBgheader(true);
    } else {
      setBgheader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);
  }, [bgHeader]);

  // Change Theme Color
  const onChangeThemeColor = () => {
    setThemeColor(!themeColor);
  };

  //Show Toggle
  const [showToggle, setShowToggle] = useState(false);
  const showToggleForheader = () => {
    if (showToggle) {
      setShowToggle(!showToggle);
    } else {
      setShowToggle(!showToggle);
    }
  };

  return (
    <div>
      {/* <!-- ========================== HEADER ============================ --> */}
      <header className={`header  ${bgHeader && "bg-header"}`} id="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Nguyễn Thanh Huy
          </a>
          <div
            // onClick={showToggleForheader ? "show-menu" : ""}
            className={`nav__menu ${showToggle && "show-menu"}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <a href="index.html" className="nav__link">
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a href="about.html" className="nav__link">
                  About Me
                </a>
              </li>

              <li className="nav__item">
                <a href="work.html" className="nav__link">
                  Portfolio
                </a>
              </li>

              <li className="nav__item">
                <a href="contact.html" className="button">
                  Contact Me
                </a>
              </li>
            </ul>
            {/* <!-- Close Buttton --> */}
            <div
              onClick={showToggleForheader}
              className="nav__close"
              id="nav-close"
            >
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__actions">
            {/* <!-- Theme Button --> */}
            <div onClick={onChangeThemeColor} className="nav__actions-theme">
              <i
                // className="ri-moon-line change__theme"
                className={`ri-${
                  themeColor ? "sun" : "moon"
                }-line change__theme`}
                id="theme-button"
              ></i>
            </div>
            {/* <!-- Toggle Button --> */}
            <div
              onClick={showToggleForheader}
              className="nav__toggle"
              id="nav-toggle"
            >
              <i className="ri-apps-2-line"></i>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- ========================== MAIN ============================ --> */}
      {/* <!-- ========================== HOME MAIN ============================ --> */}
      <div className="home section">
        <div className="home__rectange"></div>

        <div className="home__container container grid">
          <div className="home__perfil perfil">
            <div className="perfil__content">
              <img
                src={"./img/home-perfilV1.png"}
                alt="image"
                className="perfil__img"
              />
            </div>
          </div>

          <div className="home__content grid">
            <div className="home__data grid">
              <h1 className="home__name">Nguyễn Thanh Huy</h1>
              <h2 className="home__profession">
                Database Management
                <br />
                Web Programming
                <br />
                IT Support
              </h2>
              <div className="home_social">
                <a
                  href="https://github.com/thanhhuy17"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="ri-github-fill"></i>
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>

                <a
                  href="https://www.instagram.com/huyipc247/"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
            </div>
            <a
              href="./assets/pdf/Liz-Cv.pdf"
              download=""
              className="home__button button"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* <!-- ========================== SERVICES ============================ --> */}
      <div className="services section">
        <h2 className="section__title">
          The Services <br />I Offer
        </h2>

        <div className="services__container container grid">
          <article className="services__card">
            <i className="ri-code-s-slash-line services__icon"></i>

            <h2 className="services__title">Web Developer</h2>

            <p className="services__description">
              Beautiful and elegant designs with interfaces that are intuitive,
              efficient and pleasant to use for the user.
            </p>

            <button className="services__button button">Know More</button>

            <div className="services_modal">
              <div className="services__modal-content">
                <i className="ri-close-line services__modal-close"></i>

                <h2 className="services__modal-title">Web Developer</h2>

                <ul className="services__modal-list grid">
                  <li className="services__modal-item">
                    Create professional and quality websites at the client's
                    request.
                  </li>

                  <li className="services__modal-item">
                    I do web design in prototypes.
                  </li>

                  <li className="services__modal-item">
                    I position your website with advanced SEO.
                  </li>

                  <li className="services__modal-item">
                    I solve performance problems on web pages.
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="services__card">
            <i className="ri-pen-nib-line services__icon"></i>

            <h2 className="services__title">Web Designer</h2>

            <p className="services__description">
              Beautiful and elegant designs with interfaces that are intuitive,
              efficient and pleasant to use for the user.
            </p>

            <button className="services__button button">Know More</button>

            <div className="services_modal">
              <div className="services__modal-content">
                <i className="ri-close-line services__modal-close"></i>

                <h2 className="services__modal-title">Web Designer</h2>

                <ul className="services__modal-list grid">
                  <li className="services__modal-item">
                    Create professional and quality websites at the client's
                    request.
                  </li>

                  <li className="services__modal-item">
                    I do web design in prototypes.
                  </li>

                  <li className="services__modal-item">
                    I position your website with advanced SEO.
                  </li>

                  <li className="services__modal-item">
                    I solve performance problems on web pages.
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="services__card">
            <i className="ri-layout-2-line services__icon"></i>

            <h2 className="services__title">Interfaces UI/UX</h2>

            <p className="services__description">
              Beautiful and elegant designs with interfaces that are intuitive,
              efficient and pleasant to use for the user.
            </p>

            <button className="services__button button">Know More</button>

            <div className="services_modal">
              <div className="services__modal-content">
                <i className="ri-close-line services__modal-close"></i>

                <h2 className="services__modal-title">Interfaces UI/UX</h2>

                <ul className="services__modal-list grid">
                  <li className="services__modal-item">
                    Create professional and quality websites at the client's
                    request.
                  </li>

                  <li className="services__modal-item">
                    I do web design in prototypes.
                  </li>

                  <li className="services__modal-item">
                    I position your website with advanced SEO.
                  </li>

                  <li className="services__modal-item">
                    I solve performance problems on web pages.
                  </li>
                  {/* <!-- Add check webkit Scrollbar-->
                                <!-- <li className="services__modal-item">
                                    I position your website with advanced SEO.
                                </li>

                                <li className="services__modal-item">
                                    I solve performance problems on web pages.
                                </li>
                                <li className="services__modal-item">
                                    I position your website with advanced SEO.
                                </li>

                                <li className="services__modal-item">
                                    I solve performance problems on web pages.
                                </li> --> */}
                </ul>
              </div>
            </div>
          </article>

          <article className="services__card">
            <i className="ri-layout-2-line services__icon"></i>

            <h2 className="services__title">Database Management</h2>

            <p className="services__description">
              Understand data structures, have experience working with SQL
              Server.
            </p>

            <button className="services__button button">Know More</button>

            <div className="services_modal">
              <div className="services__modal-content">
                <i className="ri-close-line services__modal-close"></i>

                <h2 className="services__modal-title">Interfaces UI/UX</h2>

                <ul className="services__modal-list grid">
                  <li className="services__modal-item">
                    Create professional and quality websites at the client's
                    request.
                  </li>

                  <li className="services__modal-item">
                    I do web design in prototypes.
                  </li>

                  <li className="services__modal-item">
                    I position your website with advanced SEO.
                  </li>

                  <li className="services__modal-item">
                    I solve performance problems on web pages.
                  </li>
                  {/* <!-- Add check webkit Scrollbar-->
                                <!-- <li className="services__modal-item">
                                    I position your website with advanced SEO.
                                </li>

                                <li className="services__modal-item">
                                    I solve performance problems on web pages.
                                </li>
                                <li className="services__modal-item">
                                    I position your website with advanced SEO.
                                </li>

                                <li className="services__modal-item">
                                    I solve performance problems on web pages.
                                </li> --> */}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* <!-- ========================== WORK ============================ --> */}
      <div className="work section">
        <h2 className="section__title">
          My Most <br />
          Resent Works
        </h2>

        <div className="work__container container grid">
          <article className="work__card">
            <a href="#" target="_blank" className="work__link">
              <img src="./img/work-1.png" alt="image" className="work__img" />
              <i className="ri-arrow-right-circle-line work__icon"></i>
            </a>

            <h2 className="work__title">Creative Website</h2>
            <span className="work__subtitle">Website Design</span>
          </article>

          <article className="work__card">
            <a href="#" target="_blank" className="work__link">
              <img src="./img/work-2.png" alt="image" className="work__img" />
              <i className="ri-arrow-right-circle-line work__icon"></i>
            </a>

            <h2 className="work__title">Creative Website</h2>
            <span className="work__subtitle">Website Design</span>
          </article>

          <article className="work__card">
            <a href="#" target="_blank" className="work__link">
              <img src="./img/work-3.png" alt="image" className="work__img" />
              <i className="ri-arrow-right-circle-line work__icon"></i>
            </a>

            <h2 className="work__title">Awesome App</h2>
            <span className="work__subtitle">App Design</span>
          </article>

          <article className="work__card">
            <a href="#" target="_blank" className="work__link">
              <img src="./img/work-4.png" alt="image" className="work__img" />
              <i className="ri-arrow-right-circle-line work__icon"></i>
            </a>

            <h2 className="work__title">Awesome App</h2>
            <span className="work__subtitle">App Design</span>
          </article>

          <article className="work__card">
            <a href="#" target="_blank" className="work__link">
              <img src="./img/work-5.png" alt="image" className="work__img" />
              <i className="ri-arrow-right-circle-line work__icon"></i>
            </a>

            <h2 className="work__title">Interface Design</h2>
            <span className="work__subtitle">UI/UX</span>
          </article>

          <article className="work__card">
            <a href="#" target="_blank" className="work__link">
              <img src="./img/work-6.png" alt="image" className="work__img" />
              <i className="ri-arrow-right-circle-line work__icon"></i>
            </a>

            <h2 className="work__title">Interface Design</h2>
            <span className="work__subtitle">UI/UX</span>
          </article>
        </div>
      </div>

      {/* <!-- ========================== TESTIMONIAL ============================ --> */}
      <section className="testimonial section">
        <h2 className="section__title">
          What They Say <br />
          About Me?
        </h2>

        <div className="testimonial__container container">
          <div className="testimonial__swiper swiper">
            <div className="swiper-wrapper">
              <article className="testimonial__card swiper-slide">
                <div className="testimonial__border">
                  <img
                    src="./img/testimonial-1.png"
                    alt="image"
                    className="testimonial__img"
                  />
                </div>
                <h2 className="testimonial__name">Jen Will</h2>
                <p className="testimonial_description">
                  I hired a project and the services were of quality, the work
                  delivered is of good content, excellent work.
                </p>
              </article>

              <article className="testimonial__card swiper-slide">
                <div className="testimonial__border">
                  <img
                    src="./img/testimonial-2.png"
                    alt="image"
                    className="testimonial__img"
                  />
                </div>
                <h2 className="testimonial__name">Rial Loz</h2>
                <p className="testimonial_description">
                  I hired a project and the services were of quality, the work
                  delivered is of good content, excellent work.
                </p>
              </article>

              <article className="testimonial__card swiper-slide">
                <div className="testimonial__border">
                  <img
                    src="./img/testimonial-3.png"
                    alt="image"
                    className="testimonial__img"
                  />
                </div>
                <h2 className="testimonial__name">Mey Doth</h2>
                <p className="testimonial_description">
                  I hired a project and the services were of quality, the work
                  delivered is of good content, excellent work.
                </p>
              </article>

              <article className="testimonial__card swiper-slide">
                <div className="testimonial__border">
                  <img
                    src="./img/testimonial-4.png"
                    alt="image"
                    className="testimonial__img"
                  />
                </div>
                <h2 className="testimonial__name">Celi Phet</h2>
                <p className="testimonial_description">
                  I hired a project and the services were of quality, the work
                  delivered is of good content, excellent work.
                </p>
              </article>
            </div>
          </div>

          {/* <!-- ================Pagination=================== --> */}
          <div className="swiper-pagination"></div>
        </div>
      </section>

      {/* <!-- ========================== CONTACT ============================ --> */}
      <section className="contact section">
        <div className="contact__container container grid">
          <h2 className="section__title">
            Let's Talk <br />
            About Your Project
          </h2>

          <a href="contact.html" className="contact__button button">
            Contact Me
          </a>
        </div>
      </section>

      {/* <!-- ========================== FOOTER ============================ --> */}
      <footer className="footer">
        <div className="footer__container container grid">
          <div className="footer__content grid">
            <a href="index.html" className="footer__logo">
              Huy
            </a>

            <ul className="footer__links">
              <li>
                <a href="about.html" className="footer__link">
                  About Me
                </a>
              </li>

              <li>
                <a href="work.html" className="footer__link">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="contact.html" className="footer__link">
                  Contact Me
                </a>
              </li>
            </ul>

            <div className="footer__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-facebook-circle-fill"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-instagram-fill"></i>
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-twitter-fill"></i>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
            </div>
          </div>

          <div className="footer__copy">
            &#169; All Rights Reserved By Huy Nguyen
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
