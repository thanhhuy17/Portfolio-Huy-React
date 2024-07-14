import { useContext, useState } from "react";
import { AppContext } from "../AppContext/AppContext";
import { Link } from "react-router-dom";
import { BsDatabase } from "react-icons/bs";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const { themeColor, showToggleForheader, showToggle } =
    useContext(AppContext);

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
      <div
        onClick={showToggle ? () => showToggleForheader() : undefined}
        className="home section"
      >
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
                Web Developer
                <br />
                Database Management
                <br />
                IT Support
              </h2>
              <div className="home_social">
                <a
                  href="https://github.com/thanhhuy17"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="ri-github-fill sizegit"></i>
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
              href="https://topdev.vn/users/view-cv/2c1e83a0-41ab-11ef-b2f8-cb7133e8b7b8"
              // download="./public/pdf/CV.pdf"
              className="home__button button"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* <!-- ========================== SERVICES ============================ --> */}
      <div
        onClick={showToggle ? () => showToggleForheader() : undefined}
        className="services section"
      >
        <h2 className="section__title">
          The Services <br />I Offer
        </h2>

        <div className="services__container container grid">
          <article className="services__card">
            <i className="ri-code-s-slash-line services__icon"></i>

            <h2 className="services__title">Web Developer</h2>

            <p className="services__description">
              Write code to perform calculations, manipulate data from a
              database, and display results in an interactive way on a website.
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

                {/* <h2 className="services__modal-title">Web Developer</h2> */}

                <ul className="services__modal-list grid">
                  <li className="services__modal-item">
                    Find and fix bugs in the code to ensure the website runs
                    smoothly.
                  </li>
                  <li className="services__modal-item">
                    Monitor, update, and maintain the website and web
                    applications to ensure security and performance.
                  </li>
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
              Beautiful and elegant designs with interfaces that are intuitive.
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
              Efficient and pleasant to use for the user.
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
                </ul>
              </div>
            </div>
          </article>

          <article className="services__card">
            <BsDatabase className="services__icon" />

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
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* <!-- ========================== WORK ============================ --> */}
      <div
        onClick={showToggle ? () => showToggleForheader() : undefined}
        className="work section"
      >
        <h2 className="section__title">
          My Most <br />
          Resent Works
        </h2>

        <div className="work__container container grid">
          <article className="work__card">
            <a href="#" target="_blank" className="work__link">
              <img src="./img/project1.png" alt="image" className="work__img" />
              <i className="ri-arrow-right-circle-line work__icon"></i>
            </a>

            <h2 className="work__title">Creative Website</h2>
            <span className="work__subtitle">Website Portfolio</span>
          </article>

          <article className="work__card">
            <a
              href="https://movieapphuynguyen-thanhhuy17s-projects.vercel.app/"
              target="_blank"
              className="work__link"
            >
              <img src="./img/project2.png" alt="image" className="work__img" />
              <i className="ri-arrow-right-circle-line work__icon"></i>
            </a>

            <h2 className="work__title">Movie website design</h2>
            <span className="work__subtitle">Website Design</span>
          </article>

          <article className="work__card">
            <a
              href="https://react-admin-dashboard-gqv5qrwkt-thanhhuy17s-projects.vercel.app/"
              target="_blank"
              className="work__link"
            >
              <img src="./img/project3.png" alt="image" className="work__img" />
              <i className="ri-arrow-right-circle-line work__icon"></i>
            </a>

            <h2 className="work__title">Admin Dashboard Web</h2>
            <span className="work__subtitle">
              Management Website <br />
              (User Login: <strong>michael.scott@dundermifflin.com</strong>
              <br />
              Pass: <strong>demodemo</strong> )
            </span>
          </article>

          <article className="work__card">
            <a
              href="http://103.116.9.183:5505/#/login"
              target="_blank"
              className="work__link"
            >
              <img src="./img/project4.png" alt="image" className="work__img" />
              <i className="ri-arrow-right-circle-line work__icon"></i>
            </a>

            <h2 className="work__title">
              Website For Import And Export Management
            </h2>
            <span className="work__subtitle">
              {" "}
              2 Years Of Experience In System Deployment, Error Checking, Data
              Checking, Data Editing. <br />
              (User Login: <strong>finaltest</strong>
              <br />
              Pass: <strong>ipc247@123456</strong> )
            </span>
          </article>
        </div>
      </div>

      {/* <!-- ========================== TESTIMONIAL ============================ --> */}
      <section
        onClick={showToggle ? () => showToggleForheader() : undefined}
        className="testimonial section"
      >
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
                    src="./img/management1.png"
                    alt="image"
                    className="testimonial__img"
                  />
                </div>
                <h2 className="testimonial__name">
                  Project Management <br />
                  Cái Trí Minh <br />
                  <h5>Phone: 0908501594</h5>
                </h2>
                <p className="testimonial_description">
                  I worked with Huy, the assigned work had good content,
                  excellent work.
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
        <div className="testimonial__container container">
          <div className="testimonial__swiper swiper">
            <div className="swiper-wrapper">
              <article className="testimonial__card swiper-slide">
                <div className="testimonial__border">
                  <img
                    src="./img/management2.png"
                    alt="image"
                    className="testimonial__img"
                  />
                </div>
                <h2 className="testimonial__name">
                  Leader <br />
                  Nguyễn Trọng Hiếu <br />
                  <h5>Phone: 0383710280</h5>
                </h2>
                <p className="testimonial_description">
                  Work energetically, hard, and work well with the team.
                  Progress in work.
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
      <section
        onClick={showToggle ? () => showToggleForheader() : undefined}
        className="contact section"
      >
        <div className="contact__container container grid">
          <h2 className="section__title">
            Let's Talk <br />
            About Your Project
          </h2>

          <Link to="/contact" className="contact__button button">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
