"use strict";

define(
    ['backbone'],
    function (Backbone) {
        return Backbone.Model.extend({
            url: '#',

            defaults: {
                organisation_id: 1,
                name: 'web-1',
                instance_id: 'i-723afe12',
                cloud_id: 1,
                cloud_name: 'aws',
                location_id: 1,
                location_name: 'eu-west-1',
                state: 'up',
                state_at: '2015-04-19T12:59:23+00:00',
                schedule_id: 1,
                schedule_description: 'Up daily starting 9:00 AM IST'
            }
        });
    }
);