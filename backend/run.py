from flask import Flask
from flask_restx import Api, Resource
from db import db, init_db

from account import api as account_api

# Initialize flask and flaskrestplus
app = Flask(__name__)
api = Api()
api.init_app(app)
init_db(app)

# add apis
api.add_namespace(account_api)

if __name__ == '__main__':
    app.run(debug=True)