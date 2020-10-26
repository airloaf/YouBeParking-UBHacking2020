from flask import Flask
from flask_restx import Api, Resource
from db import db, init_db
from account import init_bcrypt


from account import api as account_api

#Initialize flask and flaskrestplus
app = Flask(__name__)
api = Api()
api.init_app(app)
init_db(app)
init_bcrypt(app)
#this creates database
with app.app_context():
    db.create_all()

# add apis
api.add_namespace(account_api)

if __name__ == '__main__':
    app.run(host='0.0.0.0')