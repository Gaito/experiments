'use strict';

const WebBuilder = require('@kseirin/web-builder');
const CopyConfig = require('@kseirin/web-builder/lib/models/CopyConfig.js');
const HtmlConfig = require('@kseirin/web-builder/lib/models/HtmlConfig.js');
const CssConfig = require('@kseirin/web-builder/lib/models/CssConfig.js');
const JsConfig = require('@kseirin/web-builder/lib/models/JsConfig.js');

const copy = new CopyConfig({
  src: [`src/images/**/*`],
  dist: {
    'src/images': 'dist/images'
  },
  watch: [`src/images/**/*`],
  clean: [`dist/images/**/*`]
});

const html = new HtmlConfig({
  src: [`src/html/**/*`],
  dist: {
    'src/html': 'dist'
  },
  watch: [`src/html/**/*`],
  clean: [`dist/**/*.html`]
});

const css = new CssConfig({
  src: [`src/css/main.scss`],
  dist: {
    'src/css': 'dist/styles'
  },
  watch: [`src/css/**/*`],
  clean: [`dist/styles/**/*`],
  options: {
    compiler: 'SASS'
  }
});

const js = new JsConfig({
  src: [`src/js/app.js`],
  dist: {
    'src/js': 'dist/js'
  },
  watch: [`src/js/**/*`],
  clean: [`dist/js/**/*`],
  options: {
    compiler: 'SASS'
  }
});

new WebBuilder({
  copy,
  html,
  css,
  js
});