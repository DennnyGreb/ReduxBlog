#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Controller for blog post functionality.
"""

from flask import Flask

from json import dumps, loads


from app import db
from app.models.post import Post

app = Flask(__name__)


class PostController(object):
    """Controller, that provide post functionality."""


    def save_post(self, request):
        """
        Recieve json data of post and add it to db. 
        """
        dict_data = loads(request.data)
        try: 
            db.session.add(Post(post_name=dict_data['data']['post_name'],
            post_img=dict_data['data']['post_img'],
            post_sub=dict_data['data']['post_sub'],
            post_desc=dict_data['data']['post_desc']))
            return dumps({'status': 'success'})
        except Exception, error:
            print error
            return dumps({'status': 'error'})
