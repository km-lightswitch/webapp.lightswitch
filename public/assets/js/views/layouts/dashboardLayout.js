"use strict";

define(
    [
        "marionette",
        "handlebars",
        "backbone.wreqr",
        "text!templates/layouts/dashboard-Layout.html"
    ],
    function(Marionette, Handlbears, Wreqr, template) {
        return Marionette.LayoutView.extend({
            el: 'body',
            template: Handlbears.compile(template),

            regions: {
                content: '#instances'
            },

            destroyImmediate: true
        });
    }
);