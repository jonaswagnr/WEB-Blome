import { Link } from "gatsby";
import React from "react";
import FullLogo from "../images/blome-logo.svg";

const Footer = () => (
  <footer class="py-4">
    <div class="container text-center text-lg-left">
      <div class="row d-flex justify-content-between flex-column flex-lg-row align-items-center align-items-lg-start">
        <div class="d-flex flex-column col-10 col-lg-5 pl-0">
          <Link to="/">
            <img class="FullLogo" src={FullLogo} alt="edy-logo" />
          </Link>

          {/* <p>
                Let's get you connected! We've designed a simple, efficient
                process for companies migrating to PiperNet. Here's how it
                works.
              </p> */}
          <ul class="list-inline d-flex mb-3 justify-content-center justify-content-lg-start">
            {/* <li class="px-2"><a href="#"><img src="placeholder/icons/twitter.svg" alt=""></a></li>
                <li class="px-2"><a href="#"><img src="placeholder/icons/facebook-official.svg" alt=""></a></li>
                <li class="px-2"><a href="#"><img src="placeholder/icons/instagram.svg" alt=""></a></li> */}
          </ul>
        </div>
        <div>
          <h6>Raststätte Blome</h6>
          <ul class="list-inline ml-0">
            <li class="py-1">
              <a href="#klassiker">Unsere Klassiker</a>
            </li>
            <li class="py-1">
              <a href="#Speisekarte">Speisekarte</ a>
            </li>
            <li class="py-1">
              <a href="#Anfahrt">Anfahrt</a>
            </li>
          </ul>
        </div>
        <div>
          <h6>Support</h6>
          <ul class="list-inline ml-0">
            <li class="py-1">
              <Link to="/datenschutz">Datenschutz</Link>
            </li>
            <li class="py-1">
              <Link to="/impressum">Impressum</Link>
            </li>
          </ul>
        </div>
        <div class="w-100 border-top my-3"></div>
      </div>
      <div class="flex-column flex-sm-row align-items-center justify-content-sm-between">
        <p class="mb-0 small text-muted">
          © {new Date().getFullYear()} Raststätte Blome
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;