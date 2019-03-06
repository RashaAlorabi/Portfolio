import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about" className="about-section">
        <div className="container">
          <header className="text-center">
            <h2 data-animate="fadeInDown" className="title">
              About me
            </h2>
          </header>
          <div className="row">
            <div data-animate="fadeInUp" className="col-lg-6">
              <p>
                I have a <strong>Bachelor of Science degree </strong> in{" "}
                <strong> Information Technology </strong>from King Abdulaziz
                University with <strong>second honors.</strong>
              </p>

              <p>
                I <strong>worked</strong> as a <em>Sales Exclusive </em>, an{" "}
                <em>IT Specialist </em>and <em>Web developer </em>. In addition,
                I completed 200 hours of training at the IT department at the
                Savola group.{" "}
              </p>
              <p>
                I received the <strong>3rd place award </strong>in the field of{" "}
                <strong>programming </strong>in{" "}
                <strong>“COMMUNICATE-TECH” </strong> forum at King Abdulaziz
                University.
              </p>
              <p>
                I took more than 10 online courses in <strong> Udemy </strong>{" "}
                and <strong>Udacity </strong>to improve my programming skills.
              </p>
              <p>
                I have chosen to paticipate in Tuweq Bootcamp out of{" "}
                <strong>20,000 applicants</strong>.{" "}
              </p>
              <p>
                I am the <strong>Wife</strong> of a grateful man &{" "}
                <strong>Mom</strong> for the cutest girl ever.{" "}
              </p>
            </div>
            <div data-animate="fadeInUp" className="col-lg-6">
              <div className="skill-item">
                <div className="progress-title">Python</div>
                <div className="progress">
                  <div
                    role="progressbar"
                    style={{
                      width: "70%",
                      ariaValueNow: "0",
                      ariaValueMin: "60",
                      ariaValueMax: "100"
                    }}
                    className="progress-bar progress-bar-skill1"
                  />
                </div>
              </div>
              <div className="skill-item">
                <div className="progress-title">HTML</div>
                <div className="progress">
                  <div
                    role="progressbar"
                    style={{
                      width: "80%",
                      ariaValuenow: "70",
                      ariaValuemin: "60",
                      ariaValuemax: "100"
                    }}
                    className="progress-bar progress-bar-skill2"
                  />
                </div>
              </div>
              <div className="skill-item">
                <div className="progress-title">CSS</div>
                <div className="progress">
                  <div
                    role="progressbar"
                    style={{
                      width: "80%",
                      ariaValuenow: "80",
                      ariaValuemin: "0",
                      ariaValuemax: "100"
                    }}
                    className="progress-bar progress-bar-skill3"
                  />
                </div>
              </div>
              <div className="skill-item">
                <div className="progress-title">JAVASCRIPT</div>
                <div className="progress">
                  <div
                    role="progressbar"
                    style={{
                      width: "100%",
                      ariaValuenow: "90",
                      ariaValuemin: "0",
                      ariaValuemax: "100"
                    }}
                    className="progress-bar progress-bar-skill4"
                  />
                </div>
              </div>
              <div className="skill-item">
                <div className="progress-title">PHP</div>
                <div className="progress">
                  <div
                    role="progressbar"
                    style={{
                      width: "70%",
                      ariaValuenow: "70",
                      ariaValuemin: "0",
                      ariaValuemax: "100"
                    }}
                    className="progress-bar progress-bar-skill5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
