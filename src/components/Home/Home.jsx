import { useEffect, useState } from "react";

const Home = () => {
  const [bgHeader, setBgheader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [themeColor, setThemeColor] = useState(false);
  //Change Background Header
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

  //Show Modal
  const showInfoModal = (e) => {
    e.stopPropagation(); // chan cac hanh dong truoc no
    if (showModal) {
      setShowModal(!showModal);
    } else {
      setShowModal(!showModal);
    }
  };

  // }
  return (
    <div id="home" className={`${themeColor ? "dark-theme" : ""} `}>
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

            <button onClick={showInfoModal} className="services__button button">
              Know More
            </button>

            <div
              onClick={() => {
                setShowModal(false);
              }}
              className={`services_modal ${showModal ? "active-modal" : ""}`}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModal(true);
                }}
                className="services__modal-content"
              >
                <i
                  onClick={showInfoModal}
                  className="ri-close-line services__modal-close"
                ></i>

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

            <button onClick={showInfoModal} className="services__button button">
              Know More
            </button>

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

            <button onClick={showInfoModal} className="services__button button">
              Know More
            </button>

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

            <button onClick={showInfoModal} className="services__button button">
              Know More
            </button>

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
    </div>
  );
};

export default Home;
