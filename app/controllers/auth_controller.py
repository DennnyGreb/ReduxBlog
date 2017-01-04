#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Controller for auth functionality.
"""

from flask import Flask, jsonify, session

from json import dumps, loads

from passlib.apps import custom_app_context as pwd_context

import uuid

from app import db
from app.models.user import User

app = Flask(__name__)
app.secret_key = "secret"


class AuthController(object):
    """Controller, that provide post functionality."""


    def registration(self, request):
        dict_data = loads(request.data)
        try:
            if(User.query.filter_by(email=dict_data['data']['email']).first() is None):
                db.session.add(User(full_name=dict_data['data']['full_name'],
                email=dict_data['data']['email'],
                password_hash=self.hash_password(dict_data['data']['password'])))
                db.session.commit()
                return dumps({'status': 'success'})
            else:
                return dumps({'status': 'exist'})
        except Exception, error:
            print error
            return dumps({'status': 'error'})

    def login(self, request):
        result = dict()
        dict_data = loads(request.data)
        user = User.query.filter_by(full_name=dict_data['data']['full_name']).first()
        if not user:
            result['notexist'] = True 
        else:
            if self.verify_password(user.__dict__['full_name'], dict_data['data']['password']):
                session['logged_in'] = True
                result['secret_key'] = uuid.uuid4().hex
        return dumps({'result': result})

    def hash_password(self, password):
        return pwd_context.encrypt(password)

    def verify_password(self, full_name, password):
        user = User.query.filter_by(full_name=full_name).first()
        return pwd_context.verify(password, user.__dict__['password_hash'])
