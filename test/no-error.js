'use strict';

var test = require('tap').test;
var semver = require('../');

test('no error mode is turned on', function (t) {
  semver.setErrorMode(true, '1.0.0');
  t.equal(semver.lt('wrongversion', '2.0.0'), true);
  t.end();
});

test('throw when default version is invalid', function (t) {
  t.throws(function () {
    semver.setErrorMode(true, 'wrongversion');
  });
  t.end();
});
