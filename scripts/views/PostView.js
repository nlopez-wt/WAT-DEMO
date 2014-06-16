//File: views/PostView.js
define(['jquery','underscore','backbone', 'libs/utils', 'models/Post', 'text!templates/postTemplate.html'], function($, _, Backbone, Utils, Post, postTemplate){

	var PostView = Backbone.View.extend({
		el: '.page',
		render: function (options) {
			if (options.id) {
				var that = this;
				that.post = new Post({id: options.id});
				that.post.fetch({
					success: function (post){
						var template = _.template(postTemplate, {post: that.post.attributes.post, link: that.post.getLinks()});
						that.$el.html(template);
					}
				});			
			}
		}
	});

	return PostView;
});