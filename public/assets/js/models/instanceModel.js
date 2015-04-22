"use strict";

define(
    ['backbone'],
    function (Backbone) {
        return Backbone.Model.extend({
            url: '/organisations/1/instances',

            parse: function(response) {
                this.set("instances", response);
            }

        });
    }
);