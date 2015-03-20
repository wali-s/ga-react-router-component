'use strict';
var ga = require('./ga');


function analytics() {
	console.log('yo');
  ga('send', 'pageview');
}


module.exports = analytics;
