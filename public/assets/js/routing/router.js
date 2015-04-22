"use strict";

define(
	[
		'marionette',
		'backbone.wreqr'
	],
	function (Marionette, Wreqr) {
		function createRoutingFunction(path) {
			return function() {
				var routingChannel = Wreqr.radio.channel('routing');
				routingChannel.vent.trigger('routeChangeRequested', { path: path })
			}
		}

		return Marionette.AppRouter.extend({
			initialize: function() {
				this.route('home', createRoutingFunction('home', this));
				this.route('dashboard', createRoutingFunction('dashboard', this));
			}
		});

	}
);