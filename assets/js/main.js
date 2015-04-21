"use strict";


requirejs.config({
	paths: {
        "backbone": 'vendor/backbone',
        "backbone.wreqr": 'vendor/backbone.wreqr',
        "handlebars": 'vendor/handlebars-v3.0.0',
        "marionette": 'vendor/backbone.marionette',
        "backbone.babysitter": 'vendor/backbone.babysitter',
        "text": 'vendor/text',
        "jquery": 'vendor/jquery',
        "underscore": 'vendor/underscore'		
	},

	shim: {
		underscore: {
			exports: "_"
		},
		handlebars: {
			exports: "Handlebars"
		},
		backbone: {
			deps: ["jquery", "underscore"],
			exports: "Backbone"
		},
		marionette: {
			deps: ["backbone"],
			exports: "Marionette"
		}
	}

});

require(
	[
		"app",
		"routing/layoutManager"
	],

	function(Application, LayoutManager) {
		var application = new Application();
		var layoutManager = new LayoutManager();

		layoutManager.start();
		application.start();
	}
	
);