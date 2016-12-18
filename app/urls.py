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

_post_controller = PostController()

@app.route('/', methods=['GET'])
def render_base():
    """ Root routing function """
    return render_template("index.html")

@app.route('/save_post', methods=['POST'])
def save_info():
    """ Root routing function """
    return _post_controller.save_post(request)
