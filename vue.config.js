module.exports = {
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        args[0]['process.env']['PACKAGE_VERSION'] =
          JSON.stringify(require('./package.json').version);
        return args;
      });
  }
}
