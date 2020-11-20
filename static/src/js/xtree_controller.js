odoo.define('xtree.Controller', function (require) {
    "use strict";

    var AbstractController = require('web.AbstractController');


    var XTreeController = AbstractController.extend({
     

        init: function (parent, model, renderer, params) {
            this.model = model;
            this.renderer = renderer;
            this._super.apply(this, arguments);
        },

        start: function () {
            return this._super();
        },

    });

    return XTreeController;

});