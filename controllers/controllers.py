# -*- coding: utf-8 -*-
# from odoo import http


# class Xtree(http.Controller):
#     @http.route('/xtree/xtree/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/xtree/xtree/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('xtree.listing', {
#             'root': '/xtree/xtree',
#             'objects': http.request.env['xtree.xtree'].search([]),
#         })

#     @http.route('/xtree/xtree/objects/<model("xtree.xtree"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('xtree.object', {
#             'object': obj
#         })
