(function (angular) {
	'use strict';
	angular.module('SMART2')
		.filter('ordinal', function () {
			return function (input) {
				var s = ["th", "st", "nd", "rd"],
				v = input % 100;
				return input + (s[(v - 20) % 10] || s[v] || s[0]);
			}
		});
})(angular);