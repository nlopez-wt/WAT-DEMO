//File: collections/Posts
define(['jquery','underscore','backbone'], function($, _, Backbone){

	var posts = Backbone.Collection.extend({
		url: 'api/posts.json',
		sources: function () {
			var sources = [];
			
			_.each(this.models[0].attributes.posts, function(post) {
				if (!_.contains(sources, post.source))
				{
					sources.push(post.source);
				}

			});

			return sources;
		},
		filterSourceBy: function (by) {
			if (by != 'all'){
				return _.where(this.models[0].attributes.posts, {source: by });
			} 
			return  this.models[0].attributes.posts;
		}
	});

	return posts;
});