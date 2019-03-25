React  项目开发模板

## 使用
1.克隆模板
```bash
 git clone https://github.com/ktlshy/aimer2-boilerplate.git  [your_project_name]
```

2.安装

```bash
npm run setup
```
这个命令会先删除`.git` 文件以保证目录的干净，然后会安装所有的依赖

## 模板目录说明
 - `src` 目录为源码所在目录
 - `assets` 目录为图片、字体等资源所在目录
 - `libs` 目录为一些插件库所在目录
 - `utils` 目录为工具函数所在目录
 - `pages` 目录为页面组件所在目录
 - `service` 目录为服务所在目录
 - `styles` 目录为全局样式所在目录

## 模板配置说明

项目的配置在`app.config.js`中

```javascript
module.exports = {
  //项目名
  appName: 'myapp',
  // 环境变量
  // 会预设三个环境变量分表代表 开发环境 生产环境 和测试环境
  // 可以在代码中通过 APP_ENV 读取当前的环境变量
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
  // 页面配置
  // 这里的配置分别对应了webpack 中的入口 ,html-webpack-plugin 的模板和页面名
  pages: [
    {
      page: 'index',
      entry: './src/pages/app.js',
      template: './src/pages/index.html',
    },
  ],
  // 配置使用的样式语言 支持sass 和 css
  csslang: 'sass',
};

```

## babel 配置
默认的babel 配置支持装饰器 和 `async/await`,可以修改`.babelrc.js`文件自定义配置


 