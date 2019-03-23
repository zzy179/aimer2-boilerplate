module.exports = {
  appName: 'myapp',
  env: {
    development: {
      APP_ENV: 'DEV',
    },
    production: {
      APP_ENV: 'PROD',
    },
    test: {
      APP_ENV: 'TEST',
    },
  },
  pages: [
    {
      page: 'index',
      entry: './src/pages/app.js',
      template: './src/pages/index.html',
    },
  ],
  csslang: 'sass',
};
