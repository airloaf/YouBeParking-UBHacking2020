from flask import Flask
from flask_restx import Api, Resource
from database import db, init_db

# Import our api
from src.apis.calculator import api as calc_api

# Initialize flask and flaskrestplus
app = Flask(__name__)
api = Api()
api.init_app(app)
init_db(app)

# add apis
api.add_namespace(calc_api)

if __name__ == '__main__':
    app.run(debug=True)