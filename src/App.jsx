import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { AppContext, AppProvider } from "./components/AppContext/AppContext";

// Layout Dùng chung cho Home, About, Portfolio, Contact.
const Layout = () => {
  //Change Theme Color
  const { onChangeThemeColor, themeColor, showToggleForheader, showToggle } =
    useContext(AppContext);

  const [bgHeader, setBgheader] = useState(false);
  // const [showToggle, setShowToggle] = useState(false);

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

  //Show Toggle
  // const showToggleForheader = () => {
  //   if (showToggle) {
  //     setShowToggle(!showToggle);
  //   } else {
  //     setShowToggle(!showToggle);
  //   }
  // };

  return (
    <>
      {/* <!-- ========================== HEADER ============================ --> */}
      <header className={`header  ${bgHeader && "bg-header"}`} id="header">
        <nav className="nav container">
          <Link to="/" className="nav__logo">
            Nguyễn Thanh Huy
          </Link>
          <div
            className={`nav__menu ${showToggle && "show-menu"}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li onClick={showToggleForheader} className="nav__item">
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>

              <li onClick={showToggleForheader} className="nav__item">
                <Link to="/about" className="nav__link">
                  About Me
                </Link>
              </li>

              <li onClick={showToggleForheader} className="nav__item">
                <Link to="/portfolio" className="nav__link">
                  Portfolio
                </Link>
              </li>

              <li onClick={showToggleForheader} className="nav__item">
                <Link to="/contact" className="button">
                  Contact Me
                </Link>
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
      <Outlet />
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
    </>
  );
};

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          {/* Default show "Not Found" */}
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
