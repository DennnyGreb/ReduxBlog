#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
    This module is for URL routing.
"""

import json

from flask import request, render_template, redirect, url_for, session
from flask_login import (LoginManager, login_user, login_required,
                         logout_user, current_user)

from app import app
from app.models.post import Post

from app.controllers.post_controller import PostController
from app.controllers.auth_controller import AuthController

_post_controller = PostController()
_auth_controller = AuthController()

@app.route('/', methods=['GET'])
def render_base():
    """ Root routing function """
    return render_template("index.html")

@app.route('/save_post', methods=['POST'])
def save_info():
    """ Function for post info saving """
    return _post_controller.save_post(request)

@app.route('/get_posts', methods=['POST'])
def get_info():
    """ Function for post info getting """
    return _post_controller.get_posts(request)

@app.route('/registration', methods=['POST'])
def registrate():
    """ Function for post info getting """
    return _auth_controller.registration(request)
