#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""User table model.

Class User implements model of the user table in database.

"""

from app import db


class Post(db.Model):

    """Class represents user model in database.

    Attributes:
        id: Internal user id in database.
        full_name: Full user name.
        email: User email.
        is_active: Flag that indicates whether the user has access to the
        site.
        avatar: Path to the user avatar file.
        role_id: integer number - index of a role ['user', 'admin']

    """

    __tablename__ = 'POSTS'
    __searchable__ = ['post_name']

    id = db.Column(db.Integer, primary_key=True)
    post_name = db.Column(db.String(255), nullable=False, unique=True)
    post_img = db.Column(db.String(255))
    post_sub = db.Column(db.String(255), nullable=False)
    post_desc = db.Column(db.String(255), nullable=False)
