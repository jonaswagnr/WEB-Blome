import React from "react"
import PropTypes from "prop-types"
import CookieConsent from "react-cookie-consent"

import Header from "./header"
import Footer from "./footer"

import { Link } from "gatsby"

import "animate.css/animate.min.css"
import "../global.scss"
import "../project.scss"



const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>

      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Akzeptieren"
        buttonClasses="cookie-ok btn btn-primary"
        cookieName="myAwesomeCookieName2"
        containerClasses="cookie-container"
        expires={150}
      >
        Unsere Seite benutzt Cookies.
        <Link class="btn-link ml-4" to="/Datenschutz">
          Erfahre mehr
        </Link>
      </CookieConsent>
    </>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}



export default Layout

