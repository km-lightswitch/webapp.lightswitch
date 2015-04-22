"use strict";

define(
	[
		'backbone',
		'backbone.wreqr',
		'views/layouts/homeLayout',
		'views/pages/homePage',
		'views/layouts/dashboardLayout',
		'views/pages/dashboardPage'
	],

	function (Backbone, Wreqr, HomeLayout, HomePage, DashboardLayout, DashboardPage) {
		var pagePathMap = {
			'home': { page: HomePage, layout: HomeLayout },
			'dashboard': { page: DashboardPage, layout: DashboardLayout }
		};

		return function() {
			var currentLayout;

			this.start = function () {
				var channel = Wreqr.radio.channel('routing');
				channel.vent.on('routeChangeRequested', function (evt) {
					Backbone.history.navigate(evt.path);

					var pageInfo = pagePathMap[evt.path];
					var Page = pageInfo.page;
					var Layout = pageInfo.layout;

					if (!currentLayout || !(currentLayout instanceof Layout)) {
						currentLayout = new Layout();
						currentLayout.render();
					}

					currentLayout.showChildView('content', new Page());
				});
			}
		};
	}
);