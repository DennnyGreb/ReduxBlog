#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Controller for blog post functionality.
"""

from flask import Flask

from json import dumps

from flask_restful import Resource, Api

from app import db
from app.models.post import Post

app = Flask(__name__)
api = Api(app)


class PostController(Resource):
    """Controller, that provide post functionality."""


    def save_post(self, request):
        """
        Recieve json data of post and add it to db. 
        """
        print "Blabla"
        print request.data
        return dumps(
                {
                'status': 'success'
                }
            )
