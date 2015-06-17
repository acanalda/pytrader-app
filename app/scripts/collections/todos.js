/*global PytraderGui, Backbone*/

PytraderGui.Collections = PytraderGui.Collections || {};

(function () {
    'use strict';

    PytraderGui.Collections.Todos = Backbone.Collection.extend({

        model: PytraderGui.Models.Todos

    });

})();
