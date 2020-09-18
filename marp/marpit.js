const { Marp } = require("@marp-team/marp-core");

module.exports = function (opts) {
  opts["html"] = true;

  return new Marp(opts)
    .use(require("markdown-it-include"))
    .use(require("markdown-it-textual-uml"))
    .use(require("thingworx-markdown-it-video"), {
      youtube: { width: 640, height: 390 },
    });
};
