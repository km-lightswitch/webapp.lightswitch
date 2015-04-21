"use strict";

define(
	[
		"marionette",
		"handlebars",
		"backbone.wreqr",
		"text!templates/layouts/home-Layout.html"
	],
	function (Marionette, Handlebars, Wreqr, template) {
		return Marionette.LayoutView.extend({
			el: 'body',
			template: Handlebars.compile(template),

			regions: {
				content: '#home'
			},

			destroyImmediate: true
		});
	}
);