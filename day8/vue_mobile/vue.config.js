const pxtorem = require("postcss-pxtorem");


//第一我引入了flexilble.js一个文件,第二给vue脚手架下了一个包，配置了文件

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          pxtorem({
            //根据字体大小
            //以设计稿为基准：设计稿宽度/100
            rootValue: 3.75,
            propList: [
              "font",
              "font-size",
              "line-height",
              "letter-spacing",
              "width",
            ],
          }),
        ],
      },
    },
  },
};
