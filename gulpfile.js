'use strict';

const WebBuilder = require('@kseirin/web-builder');
const CopyConfig = require('@kseirin/web-builder/lib/models/CopyConfig.js');

const copy = new CopyConfig({
  src: [`src/images/**/*`],
  dist: {
    'src/images': 'dist/images'
  },
  watch: [`src/images/**/*`],
  clean: [`dist/images/**/*`]
});

new WebBuilder({
  copy
});