#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Controller for blog post functionality.
"""

from flask import Flask, jsonify

from json import dumps, loads


from app import db
from app.models.post import Post

app = Flask(__name__)


class PostController(object):
    """Controller, that provide post functionality."""

    _columns_to_query = (Post.post_name, Post.post_sub, Post.post_desc)

    def save_post(self, request):
        """Recieve json data of post and add it to db."""

        dict_data = loads(request.data)
        try: 
            if dict_data['data']['post_name']:
                db.session.add(Post(post_name=dict_data['data']['post_name'],
                post_img=dict_data['data']['post_img'],
                post_sub=dict_data['data']['post_sub'],
                post_desc=dict_data['data']['post_desc']))
                db.session.commit()
                return dumps({'status': 'success'})
            else:
                return dumps({'status': 'empty'})
        except Exception, error:
            print error
            return dumps({'status': 'error'})

    def get_posts(self, request):
        """Recieve json data of post and add it to db."""

        dict_data = loads(request.data)
        try:
            result = db.session.query(Post).filter_by(post_name=dict_data['data']['post_name'])
            return dumps({'post_name': result.first().__dict__['post_name'],
            'post_sub': result.first().__dict__['post_sub'], 'post_img': result.first().__dict__['post_img'],
            'post_desc': result.first().__dict__['post_desc']})
        except Exception, error:
            print error
            return dumps({'status': 'error'})