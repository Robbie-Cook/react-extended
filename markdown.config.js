const fs = require("fs");
const { NodeExtended } = require("node-extended");

// Capitalize a string
function toCapitalCase(str) {
  if (!str || str === "") {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
}

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

              const subItems = [];
              if (child.comment.shortText) {
                subItems.push(`\t${child.comment.shortText}`);
              }

              if (child.comment.text) {
                subItems.push(`${child.comment.text}`);
              }

              if (child.comment.tags) {
                subItems.push("");
                const item = `${child.comment.tags.map(
                  (tag) =>
                    `${toCapitalCase(tag.tag)}: ${tag.text.replace(
                      /\n/g,
                      "\n\t"
                    )}`
                )}`;
                subItems.push(item);
              }

              stringItems.push(subItems.join("\n\t"));
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
