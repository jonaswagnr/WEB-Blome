const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jonaswagner/Documents/GitHub/WEB-Blome/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jonaswagner/Documents/GitHub/WEB-Blome/src/pages/404.js"))),
  "component---src-pages-datenschutz-js": hot(preferDefault(require("/Users/jonaswagner/Documents/GitHub/WEB-Blome/src/pages/datenschutz.js"))),
  "component---src-pages-impressum-js": hot(preferDefault(require("/Users/jonaswagner/Documents/GitHub/WEB-Blome/src/pages/impressum.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jonaswagner/Documents/GitHub/WEB-Blome/src/pages/index.js")))
}

