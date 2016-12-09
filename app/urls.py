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
from app.controllers.admin_controller import AdminController
from app.controllers.login_form import LoginForm
from app.models.user import User


login_manager = LoginManager()
# provide default view method for attempts of non logged in
# users to visit protected by login pages:
login_manager.login_view = 'login'

login_manager.init_app(app)

_admin_controller = AdminController()


@app.route('/users/all')
#@login_required
def list_all_users():
    """Return web-page with the list of all users in the database."""
    return _admin_controller.get_all_users()


@app.route('/', methods=['GET'])
def render_base():
    """ Root routing function """
    return render_template("index.html")
