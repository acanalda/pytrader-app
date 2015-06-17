/*global PytraderGui, Backbone, JST*/

PytraderGui.Views = PytraderGui.Views || {};

(function () {
    'use strict';

    PytraderGui.Views.Todo = Backbone.View.extend({

        template: JST['app/scripts/templates/todo.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
