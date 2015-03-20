'use strict';
var ga = require('./ga');


function analytics() {
  ga('send', 'pageview');
}


module.exports = analytics;
