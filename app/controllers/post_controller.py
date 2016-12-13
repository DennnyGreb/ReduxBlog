#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Controller for blog post functionality.
"""


from json import dumps

from flask_restful import Resource, Api

from app import db
from app.models.user import User

app = Flask(__name__)
api = Api(app)


class PostController(Resource):
    """Controller, that provide post functionality."""


    def post(self):
        """
        Recieve json data of post and add it to db. 
        """
        return {'status': 'success'}

    def search_user(self, value):
        """
        Recieve from input, search for matches and return
        dict of them if exists.
        """
        search = '%'+value+'%'
        result = db.session.query(*self._columns_to_query).filter(
            User.full_name.like(search)).all()
        if not result:
            result = db.session.query(*self._columns_to_query).filter(
                User.email.like(search)).all()
            if not result:
                result = "Matches doesn't exist"
        return self.admin_view.render_users_list(result)


api.add_resource(PostController, '/PostController')

if __name__ == '__main__':
    app.run(debug=True)
