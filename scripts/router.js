//File: router.js
define(['jquery','underscore','backbone', 'views/HomeView', 'views/PostView'], function($, _, Backbone, HomeView, PostView){

	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'home',
			'post/:id': 'home'
		}
	});

	var homeView = new HomeView();
	var postView = new PostView();

	var init = function(){

		var router = new AppRouter();

		router.on('route:home', function (act) {
			
			homeView.render();
		});

		router.on('route:home', function (id) {
			postView.render({id: id});
		});

		Backbone.history.start();
	};

	return {init: init};
});