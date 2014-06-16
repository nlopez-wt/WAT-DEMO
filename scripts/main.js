//File: main.js
require.config({
	paths: {
		jquery: 'vendor/jquery.min',
		underscore: 'vendor/underscore-min',
		backbone: 'vendor/backbone-min',
		templates: '../templates'
	}
});

require(['app'], function(App){App.init();});