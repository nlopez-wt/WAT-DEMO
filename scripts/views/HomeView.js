//File: views/HomeView.js
define(['jquery','underscore','backbone', 'collections/Posts', 'text!templates/home/homeTemplate.html', 'text!templates/home/postsListTemplate.html'], function($, _, Backbone, Posts, homeTemplate, postList){

	var HomeView = Backbone.View.extend({
		el: '.page',
		render: function () {
			var that = this;
			if (that.posts == undefined) {
				that.posts = new Posts;
				that.posts.fetch({
					success: function (posts) {
						var template = _.template(homeTemplate, {sources: that.posts.sources()});
						that.$el.html(template);
						template = _.template(postList, {posts: that.posts.filterSourceBy('all')});
						that.$('#posts-list').html(template);
					}
				});
			} else {
				var template = _.template(homeTemplate, {sources: that.posts.sources()});
				that.$el.html(template);
				template = _.template(postList, {posts: that.posts.filterSourceBy('all')});
				that.$('#posts-list').html(template);
			}
		},
		events: {
			'change #ddpFilter' : 'filter',
			'click .star' : 'star'
		},
		filter : function(e){
			var template = _.template(postList, {posts: this.posts.filterSourceBy(e.target.value)});
			$('#posts-list').html(template);
		},
		star : function (e){
			if ( e.target.className.indexOf('like') == -1 ) {
				$(e.currentTarget).html("<button class='glyphicon glyphicon-star btn btn btn-link like' value='" + e.target.value + "' style='font-size:28px'></button>");
				this.posts.models[0].attributes.posts[e.target.value-1]["like"] = true;
			} else {
				$(e.currentTarget).html("<button class='glyphicon glyphicon-star-empty btn btn btn-link' value='" + e.target.value + "' style='font-size:28px'></button>");
				this.posts.models[0].attributes.posts[e.target.value-1]["like"] = false;
			}
		}
	});

return HomeView;
});