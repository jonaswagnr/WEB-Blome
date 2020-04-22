const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jonas/Documents/GitHub/WEB-Blome/src/pages/404.js"))),
  "component---src-pages-datenschutz-js": hot(preferDefault(require("/Users/jonas/Documents/GitHub/WEB-Blome/src/pages/datenschutz.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jonas/Documents/GitHub/WEB-Blome/src/pages/index.js")))
}

