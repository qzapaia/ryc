const env = require("./env-config.js");

module.exports = {
  presets: ["next/babel"],
  plugins: [
    ['transform-define', env],
    [
      "module-resolver",
      {
        root: ["./"]
      }
    ],
    // [
    //   "styled-components",
    //   {
    //     ssr: true,
    //     displayName: true,
    //     preprocess: false
    //   }
    // ],
    ["inline-react-svg"]
  ]
};
