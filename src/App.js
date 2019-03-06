import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro from "./Intro";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
              <a href="#intro" className="navbar-brand scrollTo">
                Rasha Alharthi
              </a>
              <button
                type="button"
                data-toggle="collapse"
                data-target="#navbarcollapse"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                className="navbar-toggler navbar-toggler-right"
              >
                <span className="fa fa-bars" />
              </button>
              <div id="navbarcollapse" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a href="#intro" className="nav-link link-scroll">
                      Intro
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#about" className="nav-link link-scroll">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#references" className="nav-link link-scroll">
                      My work
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#contact" className="nav-link link-scroll">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* <!-- Intro Image--> */}
        <Intro />

        {/* <!-- About--> */}
        <About />

        {/* <!-- Statistics--> */}
        <section
          id="statistics"
          data-dir="up"
          style={{ background: 'url("img/parallax.jpg")' }}
          className="statistics-section text-white parallax parallax"
        >
          <div className="container">
            <div className="row showcase text-center">
              <div data-animate="fadeInUp" className="col-lg-3 col-md-6" />
            </div>
          </div>
        </section>

        {/* <!-- MY Work--> */}
        <Work />

        {/* <!-- Contact--> */}
        <Contact />

        {/* <!-- Footer--> */}
        <Footer />

        <button
          type="button"
          data-toggle="collapse"
          data-target="#style-switch"
          id="style-switch-button"
          className="btn btn-primary btn-sm hidden-xs hidden-sm"
        >
          <i className="fa fa-cog fa-2x" />
        </button>
        <div id="style-switch" className="collapse">
          <h4 className="text-uppercase">Select theme colour</h4>
          <form className="mb-3">
            <select name="colour" id="colour" className="form-control">
              <option value="">select colour variant</option>
              <option value="default">turquoise</option>
              <option value="red">red</option>
              <option value="pink">pink</option>
              <option value="green">green</option>
              <option value="violet">violet</option>
              <option value="sea">sea</option>
              <option value="blue">blue</option>
            </select>
          </form>
          <p>
            <img src="img/template-mac.png" alt="" className="img-fluid" />
          </p>
          <p className="text-muted text-small">
            Stylesheet switching is done via JavaScript and can cause a blink
            while page loads. This will not happen in your production code.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
