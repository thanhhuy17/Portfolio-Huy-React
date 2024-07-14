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

          {/* <article className="work__card">
            <a href="#" target="_blank" className="work__link">
              <img src="./img/work-5.png" alt="image" className="work__img" />
              <i className="ri-arrow-right-circle-line work__icon"></i>
            </a>

            <h2 className="work__title">Interface Design</h2>
            <span className="work__subtitle">UI/UX</span>
          </article> */}

          {/* <article className="work__card">
            <a href="#" target="_blank" className="work__link">
              <img src="./img/work-6.png" alt="image" className="work__img" />
              <i className="ri-arrow-right-circle-line work__icon"></i>
            </a>

            <h2 className="work__title">Interface Design</h2>
            <span className="work__subtitle">UI/UX</span>
          </article> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
