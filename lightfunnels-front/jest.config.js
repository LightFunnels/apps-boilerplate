const { Content } = require('./assets/js/data/content');

module.exports = {
  setupFiles: [
    "<rootDir>/shim.js",
    "<rootDir>/setupTests.js"
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
    "^Components(.*)$": "<rootDir>/assets/js/components$1",
    "^Pages(.*)$": "<rootDir>/assets/js/pages$1",
    "^Assets(.*)$": "<rootDir>/assets/assets$1",
    "^Layouts(.*)$": "<rootDir>/assets/js/layouts/index$1",
    "^Data(.*)$": "<rootDir>/assets/js/data$1",
    "^Routing(.*)$": "<rootDir>/assets/js/routing$1",
    "^Builder(.*)$": "<rootDir>/builder/js$1",
    "^Variables(.*)$": "<rootDir>/shared/variables$1",
    "^Content(.*)$": "<rootDir>/assets/js/date/content/index.js$1",
    "^Shared(.*)$": "<rootDir>/shared$1",
    "^Tests(.*)$": "<rootDir>/assets/js/tests$1",
  },
  globals: {
    Content,
  }
}