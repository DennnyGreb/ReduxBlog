#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Post table model.
Class Post implements model of the post table in database.
"""

from app import db

from passlib.apps import custom_app_context as pwd_context


class Post(db.Model):

    """Class represents user model in database."""


    __tablename__ = 'POST'
    __searchable__ = ['post_name']

    id = db.Column(db.Integer, primary_key=True, unique=True)
    post_name = db.Column(db.String(255), nullable=False)
    post_img = db.Column(db.String(255))
    post_sub = db.Column(db.String(255), nullable=False)
    post_desc = db.Column(db.String(255), nullable=False)
    