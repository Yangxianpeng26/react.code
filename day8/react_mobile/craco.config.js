const path = require("path");
var pxtoviewport = require("postcss-px-to-viewport");
//两个包postcss-pxtorem，@craco/craco
module.exports = {
  style: {
    postcss: {
      plugins: [
        pxtoviewport({
          //会转换把px转vw
          viewportWidth: 375,
        }),
      ],
    },
  },
  webpack: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages/"),
    },
  },
};
