//File: models/Post
define(['jquery','underscore','backbone'], function($, _, Backbone){

	var Post = Backbone.Model.extend({
		urlRoot: 'api/posts',
		url:function(){
			return this.urlRoot + '/' + this.id + '.json';
		},
		getLinks: function () {
			var link;

			if (this.attributes.post.source === 'reddit') {
				var str = this.attributes.post.description;
				var patt1 = /\b(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)[-A-Z0-9+&@#\/%=~_|$?!:,.]*[A-Z0-9+&@#\/%=~_|$]/ig;
				var result = str.match(patt1);
				link = result[1];
			} else {
				link = this.attributes.post.link;
			}
	
			return link;
		}
	});

	return Post;
});