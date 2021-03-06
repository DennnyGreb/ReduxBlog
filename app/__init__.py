#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from config import DATABASE_URI

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI
app.secret_key = 'super_secret'
db = SQLAlchemy(app)

from app import urls, models
