odoo.define('xtree.View', function (require) {
    "use strict";

    var AbstractView = require('web.AbstractView');
    var view_registry = require('web.view_registry');
    var XTreeController = require('xtree.Controller');
    var XTreeModel = require('xtree.Model');
    var XTreeRenderer = require('xtree.Renderer');


    var XTreeView = AbstractView.extend({
        display_name: 'XTree',
        icon: 'fa-tree',
        cssLibs: [
            '/xtree/static/src/scss/xtree.scss',
        ],
        config: {
            Model: XTreeModel,
            Controller: XTreeController,
            Renderer: XTreeRenderer,
        },
        viewType: 'xtree',
        groupable: false,
        init: function () {
            this._super.apply(this, arguments);
        },
    });
    view_registry.add('xtree', XTreeView);
    return XTreeView;
});