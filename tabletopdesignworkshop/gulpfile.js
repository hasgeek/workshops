
var gulp = require('gulp');

gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = '.';

  swPrecache.write(path.join(rootDir, 'sw.js'), {
    staticFileGlobs: [rootDir + '/{.,css,fonts,images,js}/*.{js,html,css,png,jpg,gif,svg,ttf}'],
    runtimeCaching: [{
      urlPattern: /^http:\/\/boxoffice\.hasgeek\.com/,
      handler: 'networkOnly'
    },
    {
      urlPattern: /^https:\/\/imgee\.s3\.amazonaws\.com\/imgee/,
      handler: 'cacheFirst'
    },
    {
      urlPattern: /^https:\/\/[A-Za-z]+.tile.openstreetmap.org/,
      handler: 'cacheFirst'
    }],
    importScripts: [
      'https://cdn.izooto.com/scripts/workers/493590998f85ec59856253d2307ffa56ed9c0340.js'
    ],
    stripPrefix: rootDir
  }, callback);
});
