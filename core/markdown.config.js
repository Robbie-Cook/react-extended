const fs = require("fs");
const { TsDocExtended } = require("tsdoc-extended");

/* CLI markdown.config.js file example */
module.exports = {
  transforms: {
    /* Match <!-- AUTO-GENERATED-CONTENT:START (API) --> */
    API(content, options) {
      return TsDocExtended.generateMarkdown("src", ["index"]);
    },
  },
  callback: function () {
    console.log("done");
  },
};
