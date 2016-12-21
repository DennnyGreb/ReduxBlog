#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""User table model.

Class User implements model of the user table in database.

"""

from app import db


class User(db.Model):

    """Class represents user model in database.

    Attributes:
        id: Internal user id in database.
        full_name: Full user name.
        email: User email.
        password: user pass.
    """


    __tablename__ = 'USER'

    id = db.Column(db.Integer, primary_key = True)
    full_name = db.Column(db.String(255), index = True)
    email = db.Column(db.String(255))
    password_hash = db.Column(db.String(255))
