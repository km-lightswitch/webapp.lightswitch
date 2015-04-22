"use strict";

define(
    [
        'marionette',
        'handlebars',
        'backbone.wreqr',
        'models/instanceModel',
        'text!templates/pages/dashboard-Page.html'
    ],
    function (Marionette, Handlebars, Wreqr, InstanceModel, template) {
        return Marionette.ItemView.extend({
            model: new InstanceModel(),
            template: Handlebars.compile(template),

            initialize: function() {
                this.listenTo(this.model, 'change', this.render);
                this.model.fetch();
            },

            render: function() {
                var htmlOut = this.template(this.model.toJSON());
                this.$el.html(htmlOut);
                return this;
            }
        });
    }
);