import React, { Component } from "react";

class Work extends Component {
  render() {
    return (
      <section id="references">
        <div className="container">
          <div className="col-sm-12">
            <div className="mb-5 text-center">
              <h2 data-animate="fadeInUp" className="title">
                My work
              </h2>
              <p data-animate="fadeInUp" className="lead">
                I have worked on many projects.
              </p>
            </div>
            <ul id="filter" data-animate="fadeInUp">
              <li>
                <a href="#" data-filter="webdesign">
                  Webdesign
                </a>
              </li>
              <li>
                <a href="#" data-filter="marketing">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" data-filter="sp">
                  Senior Project
                </a>
              </li>
            </ul>

            <div id="references-masonry" data-animate="fadeInUp">
              <div className="row">
                <div
                  data-category="webdesign"
                  className="reference-item col-lg-3 col-md-6"
                >
                  <a href="http://www.uniscripts.co" target="_blank">
                    <div className="reference">
                      <img
                        src="img/portfolio-1.jpg"
                        alt="uniscripts"
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </div>

                <div
                  data-category="webdesign"
                  className="reference-item col-lg-3 col-md-6"
                >
                  <a href="http://dca.uniscripts.co/" target="_blank">
                    <div className="reference">
                      <img
                        src="img/portfolio-2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </div>

                <div
                  data-category="webdesign"
                  className="reference-item col-lg-3 col-md-6"
                >
                  <div className="reference">
                    <a href="#">
                      <img
                        src="img/portfolio-3.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>

                <div
                  style={{ display: "none" }}
                  data-category="marketing"
                  className="reference-item col-lg-6 col-md-6"
                >
                  <div className="reference">
                    <video width="400" controls />
                    <source src="./img/portfolio-4.MP4" type="video/mp4" />
                  </div>
                </div>

                <div
                  style={{ display: "none" }}
                  data-category="sp"
                  className="reference-item col-lg-3 col-md-6"
                >
                  <a href="#">
                    <div className="reference">
                      <img
                        src="img/portfolio-5.jpg"
                        alt="senior project"
                        className="img-fluid"
                      />
                    </div>
                  </a>
                  <div className="reference">
                    <a
                      href="https://drive.google.com/open?id=1det6lFO0uaX3HGAgDbPPxOXWl31YExL1"
                      target="_blank"
                    >
                      <button type="button">View Project!</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
