import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="col-md-6 text-center text-lg-right mt-4 mt-lg-0">
          <p>© 2019 Rasha. All rights reserved.</p>
        </div>
        <div className="col-12 mt-4">
          <p className="template-bootstrapious">
            Designed by{" "}
            <a href="https://www.bootstrapious.com">Bootstrapious</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
