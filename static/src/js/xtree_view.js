odoo.define('xtree.XTreeView', function (require) {
    "use strict";

    var AbstractView = require('web.AbstractView');
    var view_registry = require('web.view_registry');
    var XTreeController = require('xtree.XTreeController');
    var XTreeModel = require('xtree.XTreeModel');
    var XTreeRenderer = require('xtree.XTreeRenderer');


    var XTreeView = AbstractView.extend({
        display_name: 'XTree',
        icon: 'fa-pagelines',
        cssLibs: [
            '/xtree/static/src/css/xtree.css',
        ],
        config: _.extend({},AbstractView.prototype.config, {
            Model: XTreeModel,
            Controller: XTreeController,
            Renderer: XTreeRenderer,
        }),
        viewType: 'xtree',
        groupable: false,
        init: function () {
            this._super.apply(this, arguments);
        },
    });
    view_registry.add('xtree', XTreeView);
    return XTreeView;
});