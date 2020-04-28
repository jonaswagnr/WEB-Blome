import React from "react";
import Logo from "../images/blome-logo.svg";


export default class Header extends React.Component {
  componentDidMount() {
    const WOW = require("wowjs");
    new WOW.WOW({ mobile: false }).init();
  }

  render() {
    return (
      <header>
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg navbar-light text-center mx-auto">
            <a class="navbar-brand col-4 pl-0 mr-0 text-left" href="/">
              <img class="logo-header" src={Logo} alt=""/>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigations-09"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse text-center mx-auto navbar-collapse justify-content-md-center col-8 px-0"
              id="navigations-09"
            >
              <ul class="navbar-nav col-6 justify-content-center mobilenav">
                <li class="nav-item">
                  <a class="nav-link" href="#klassiker">
                    Unsere Klassiker
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Speisekarte">
                    Speisekarte
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Anfahrt">
                    Anfahrt
                  </a>
                </li>
                {/* <<li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Bestellen
                  </a>
                  div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                      Whitepaper
                    </a>
                    <a class="dropdown-item" href="#">
                      Token{" "}
                    </a>
                  </div>
                </li>*/}
              </ul>
              <div class="col-6 text-lg-right px-0 mobilenav">
                <a class="btn btn-outline-primary mt-2 mt-lg-0 mr-0 btn-mobile" href="Tel:+49(0)4963907137">
                  Jetzt bestellen
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
