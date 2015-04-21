"use strict";

define(
	[
		"marionette",
		"handlebars",
		"backbone.wreqr",
		"models/homeModel",
		"text!templates/pages/home-Page.html"
	],
	function (Marionette, Handlebars, Wreqr, HomeModel, template) {
		return Marionette.ItemView.extend({
			model: new HomeModel(),
			template: Handlebars.compile(template),

			initialize: function (options) {
				this.listenTo(this.model, 'change', this.render);
			},

			render: function() {
				var htmlOut = this.template(this.model.toJSON());
				this.$el.html(htmlOut);
				return this;
			}
		});
	}
);