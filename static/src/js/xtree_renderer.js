odoo.define('xtree.Renderer', function (require) {
    "use strict";

    var AbstractRenderer = require('web.BasicRenderer');
    // var core = require('web.core');
    // var qweb = core.qweb;

    var XTreeRenderer = AbstractRenderer.extend({
        events: _.extend({}, AbstractRenderer.prototype.events, {
        }),
        _render: function () {
            this.$el.append(
                    $('<h1>').text('Hello World!'),
            );
            return $.when();
        },
        
    });

    return XTreeRenderer;

});