import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";

const Portfolio = () => {
  const { themeColor, showToggle, showToggleForheader } =
    useContext(AppContext);
  return (
    <div id="portfolio" className={`${themeColor ? "dark-theme" : ""} `}>
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
    </div>
  );
};

export default Portfolio;
