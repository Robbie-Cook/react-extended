const fs = require("fs");
const { NodeExtended } = require("node-extended");

/* CLI markdown.config.js file example */
module.exports = {
  transforms: {
    /* Match <!-- AUTO-GENERATED-CONTENT:START (API) --> */
    API(content, options) {
      NodeExtended.executeSync(`npx typedoc src/ --json docs/index.json`);
      const data = JSON.parse(fs.readFileSync("./docs/index.json").toString());

      let stringItems = [];
      data.children.forEach((item) => {
        if (item.name !== '"index"') {
          item.children.forEach((child) => {
            const name = child.name.replace(/"/g, "");
            if (child.comment && !child.name.includes("Props")) {
              stringItems.push(`* **${name}**`);
              stringItems.push(`\n\t${child.comment.shortText}`);
              stringItems.push(`\n\t${child.comment.text}`);
            }
          });
        }
      });

      return stringItems.join("\n");

      // const string = fs.readFileSync('./docs/modules/.md');
      // return string;
    },
  },
  callback: function () {
    console.log("done");
  },
};
