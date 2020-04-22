import React from "react";


import Layout from "../components/layout";
import SEO from "../components/seo";
import heroimg from "../images/heroimg.jpg";
import Textflip from "../components/textflip";

import pic02 from "../images/favs/img_1682.jpg";
import pic03 from "../images/favs/img_1683.jpg";
import pic01 from "../images/favs/img_1692.jpg";
import pic04 from "../images/favs/img_3418.jpg";
import pic05 from "../images/favs/img_9718.jpg";
import menuekarte from "../images/menuekarte.png";

import menuekartePDF from "../images/menuekarte.pdf";


import Veranstaltungen from "../images/Veranstaltungen.svg";
import BlomeFront from "../images/blomeVorne.jpg";

import Geburtstage from "../images/Birthday.svg";

import Gutscheine from "../images/Gutscheine.svg";

import e1 from "../images/e1.png"
import e2 from "../images/e2.jpg"
import e3 from "../images/e3.jpg"
import e4 from "../images/e4.jpg"
import e5 from "../images/e5.jpg"
import e6 from "../images/e6.jpg"
import e7 from "../images/e7.jpg"
import e8 from "../images/e8.jpg"
import e9 from "../images/e9.jpg"
import e10 from "../images/e10.jpg"
import e11 from "../images/e11.jpg"
import e12 from "../images/e12.jpg"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section class="py-5">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-10 mx-auto">
            <div class="is-relative">
              <h1>Lust auf</h1>
              <Textflip />
            </div>
          </div>
        </div>
        <div class="mb-5 mt-6em">
          <a
            class="btn btn-primary mx-2 my-2 is-relative z-index-10"
            href="Tel:+49(0)4963907137"
          >
            <div class="d-flex">
              <div class="d-flex flex-column">
                <small class="m-0 p-text pcolor">Jetzt Anrufen</small>
                <span class="m-0 font-weight-bold">04963 907137</span>
              </div>
            </div>
          </a>
          <a class="btn btn-primary mx-2 my-2 is-relative z-index-10" href="#Speisekarte">
            <div class="d-flex">
              <div class="d-flex flex-column">
                <small class="m-0 p-text pcolor">Weiter zur</small>
                <span class="m-0 font-weight-bold">Speisekarte</span>
              </div>
            </div>
          </a>
        </div>
        <img class="img-fluid" src={heroimg} alt="" />
      </div>
    </section>

    <section id="klassiker" class="py-5">
      <div class="container text-center">
        <h1 class="mb-4">Unsere Klassiker</h1>
        <p class="lead mb-5">
          Bodenständig, regional, deftig und dabei immer frisch.
        </p>
        <div>
          <div class="row align-items-center text-md-left mb-5">
            <div class="col-md-6 order-1 order-md-0">
              <img class="img-fluid" src={pic01} alt="" />
            </div>
            <div class="col-md-6 mb-4 mb-md-0">
              <h1 class="mb-4">Gyrosteller</h1>
              <p>
                Seiner Beliebtheit erfreut sich unser Gyrosteller vor allem
                wegen seines saftig gebratenen Gyroses. Gepaart mit Pommes mögen
                ihn unsere Gäste am liebsten.
              </p>
            </div>
          </div>
          <div class="row align-items-center text-md-right mb-5">
            <div class="col-md-6 order-1">
              <img class="img-fluid" src={pic02} alt="" />
            </div>
            <div class="col-md-6 mb-4 mb-md-0 order-0">
              <h1 class="mb-4">Holländerteller</h1>
              <p>
                Unser Holländerteller ist gerade bei unseren Nachbarn ein
                beliebtes Gericht. Das Schweineschnitzel mit Spargel, Sauce
                Hollandaise und Käse überbacken, wahlweise mit Bratkartoffeln
                oder Pommes schmeckt einfach!
              </p>
            </div>
          </div>
          <div class="row align-items-center text-md-left mb-5">
            <div class="col-md-6 order-1 order-md-0">
              <img class="img-fluid" src={pic03} alt="" />
            </div>
            <div class="col-md-6 mb-4 mb-md-0">
              <h1 class="mb-4">Schnitzelplatte</h1>
              <p>
                Wenn es mal etwas mehr sein darf! Unsere Schnitzelplatte tischt
                mit 2 deftigen Schnitzeln in Jäger- und Zigeunersoße, 6
                Kroketten und Pommes auf.
              </p>
            </div>
          </div>
          <div class="row align-items-center text-md-right mb-5">
            <div class="col-md-6 order-1">
              <img class="img-fluid" src={pic04} alt="" />
            </div>
            <div class="col-md-6 mb-4 mb-md-0 order-0">
              <h1 class="mb-4">Dörpenerteller</h1>
              <p>
                Unser Dörpenerteller ist ein echter Klassiker! Mit
                Schweineschnitzel mit gedünsteten Zwiebeln, leckeren Pilzen und
                knusprigen Käse überbacken konnten wir schon so manchen Hunger
                stillen.
              </p>
            </div>
          </div>
          <div class="row align-items-center text-md-left mb-5">
            <div class="col-md-6 order-1 order-md-0">
              <img class="img-fluid" src={pic05} alt="" />
            </div>
            <div class="col-md-6 mb-4 mb-md-0">
              <h1 class="mb-4">Big Hörmen</h1>
              <p>
                Der Big Hörmen, eine Blome Spezialität. Mit seinen 2x 180g Fleisch Patties ist unser Lieblingshamburger richtig saftig. Das schmeckt einfach!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="Speisekarte" class="py-5 color-break">
      <div class="container text-center">
        <h1 class="mb-4">Unsere Speisekarte</h1>
        <p class="lead mb-5"></p>
        <div>
          <div class="row align-items-center text-md-left mb-5">
            <div class="col-md-6 order-0 order-md-0 text-md-right">
              <a
              target="_blank"
              rel="noopener noreferrer"
              href={menuekartePDF}>
              <img class="img-fluid menuekarte" src={menuekarte} alt="" />
            </a>
            </div>
            <div class="col-md-6 mb-4 mb-md-0">
              <div class="mb-5 mt-4">
                <a
                  class="btn btn-primary mx-2 my-2 is-relative z-index-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={menuekartePDF}
                >
                  <div class="d-flex">
                    <div class="d-flex flex-column">
                      <small class="m-0 p-text pcolor">Öffne</small>
                      <span class="m-0 font-weight-bold">Speisekarte</span>
                    </div>
                  </div>
                </a>
                <a
                  class="btn btn-primary mx-2 my-2 is-relative z-index-10"
                  href="Tel:+49(0)4963907137"
                >
                  <div class="d-flex">
                    <div class="d-flex flex-column">
                      <small class="m-0 p-text pcolor">Jetzt Anrufen</small>
                      <span class="m-0 font-weight-bold">04963 907137</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container text-center">
        <h1>Was wir sonst noch bieten</h1>
        <div class="row mt-5 text-left">
          <div class="col-md-4 d-flex align-items-start">
            <img class="mr-2 mt-2 more-features" src={Veranstaltungen} alt="" />
            <div>
              <h3 class="mb-3">Veranstaltungen</h3>
              <p>
                Ob Firmen- oder Weihnachtsfeier - bei Blome kann man einfach gut
                zusammen sitzen und den Abend verbringen.
              </p>
            </div>
          </div>
          <div class="col-md-4 d-flex align-items-start">
            <img class="mr-2 mt-2 more-features" src={Geburtstage} alt="" />
            <div>
              <h3 class="mb-3">Geburtstage</h3>
              <p>
                Geburtstage feiern wir bei Blome gerne. Dabei tischen wir auch
                immer nur das Beste auf. Rufen Sie uns an!
              </p>
            </div>
          </div>
          <div class="col-md-4 d-flex align-items-start">
            <img class="mr-2 mt-2 more-features" src={Gutscheine} alt="" />
            <div>
              <h3 class="mb-3">Gutscheine</h3>
              <p>
                Auch Gutscheine könnnen Sie bei uns kaufen. Auf Nachfrage bei unserem
                Personal fertigen wir Ihnen natürlich gerne einen an.
              </p>
            </div>
          </div>
        </div>
        <a
          class="btn btn-primary mx-2 my-2 is-relative z-index-10"
          href="Tel:+49(0)4963907137"
        >
          <div class="d-flex">
            <div class="d-flex flex-column">
              <small class="m-0 p-text pcolor">Jetzt Anrufen</small>
              <span class="m-0 font-weight-bold">04963 907137</span>
            </div>
          </div>
        </a>
      </div>
    </section>

    <section id="Anfahrt"  class="py-5">
      <div class="container text-center">
        <h1 class="mb-4">Wie Sie zu uns finden</h1>
        <p class="lead mb-5"></p>
        <div>
          <div class="row align-items-center text-md-left mb-5">
            <div class="col-md-6 order-0 order-md-0 text-md-right">
              <img class="img-fluid" src={BlomeFront} alt="" />
            </div>

            <div class="col-md-6 mb-4 mb-md-0">
              <div class="mb-5 mt-4">
                <h1>Raststätte Blome</h1>
                <p>
                  Bundesstraße 196 <br></br>
                  26892 Dörpen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="text-center">
          <h1>Eindrücke der Raststätte Blome</h1>
        </div>
      </div>
      <div class="container-fluid mt-4">
        <div class="row">
          <div class="col-sm-6 col-md-3 p-0">
            <img class="img-fluid" src={e1} alt="" />
          </div>
          <div class="col-sm-6 col-md-3 p-0">
            <img class="img-fluid" src={e2} alt="" />
          </div>
          <div class="col-sm-6 col-md-3 p-0">
            <img class="img-fluid" src={e3} alt="" />
          </div>
          <div class="col-sm-6 col-md-3 p-0">
            <img class="img-fluid" src={e4} alt="" />
          </div>
          <div class="col-sm-6 col-md-3 p-0">
            <img class="img-fluid" src={e5} alt="" />
          </div>
          <div class="col-sm-6 col-md-3 p-0">
            <img class="img-fluid" src={e6} alt="" />
          </div>
          <div class="col-sm-6 col-md-3 p-0">
            <img class="img-fluid" src={e7} alt="" />
          </div>
          <div class="col-sm-6 col-md-3 p-0">
            <img class="img-fluid" src={e8} alt="" />
          </div>
          <div class="col-sm-6 col-md-3 p-0">
            <img class="img-fluid" src={e9} alt="" />
          </div>
          <div class="col-sm-6 col-md-3 p-0">
            <img class="img-fluid" src={e10} alt="" />
          </div>
          <div class="col-sm-6 col-md-3 p-0">
            <img class="img-fluid" src={e11} alt="" />
          </div>
          <div class="col-sm-6 col-md-3 p-0">
            <img class="img-fluid" src={e12} alt="" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
