import React, { Component } from 'react';

import Layout from "../components/layout";
import SEO from "../components/seo";

class impressum extends Component {
  render() {
    return (
      <div>
          <Layout>
    <SEO title="Impressum" />

    <section class="py-5">
      <div class="container">
<h2>Seitenbetreiber/ Verantwortlicher</h2>
<p>Hermann Blome GmbH</p>
<p>Bundestraße 196</p>
<p>26892 Dörpen</p>



      </div>
    </section>
    </Layout>
      </div>
    );
  }
}

export default impressum;