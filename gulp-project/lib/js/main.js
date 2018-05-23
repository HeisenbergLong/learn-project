'use strict';

var $ = require('../../bower_components//jquery/dist/jquery.js');
var $lis = $("ul li");

for (var i = 0; i < $lis.length; i++) {

	$lis.eq(i).html('list：' + i);
}