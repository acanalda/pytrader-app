/*global PytraderGui, Backbone*/

PytraderGui.Models = PytraderGui.Models || {};

(function () {
    'use strict';

    PytraderGui.Models.Todo = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
