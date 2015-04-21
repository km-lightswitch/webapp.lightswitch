"use strict";

define(
	[
		"marionette",
		"backbone.wreqr",
		"routing/router"
	],

	function(Marionette, Wreqr, Router) {
		return Marionette.Application.extend({
			initialize: function() {
				this.on('start', function(){
					new Router();

					Backbone.history.start();

					if (Backbone.history.fragment == "") {
						var channel = Wreqr.radio.channel('routing');
						channel.vent.trigger('routeChangeRequested', { path: 'home' });
					}

				});
			}
		});
	}
);