#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Controller for auth functionality.
"""

from flask import Flask, jsonify

from json import dumps, loads


from app import db
from app.models.user import User 

app = Flask(__name__)


class AuthController(object):
    """Controller, that provide post functionality."""


    def registration(self, request):
        dict_data = loads(request.data)
        try:
            if(User.query.filter_by(email=dict_data['data']['email']).first() is None):
                db.session.add(User(full_name=dict_data['data']['full_name'],
                email=dict_data['data']['email'],
                password_hash=dict_data['data']['password']))
                db.session.commit()
                return dumps({'status': 'success'})
            else:
                return dumps({'status': 'exist'})
        except Exception, error:
            print error
            return dumps({'status': 'error'})