from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def init_db(app):
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    db.init_app(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(12), unique=True, nullable=False)
    password = db.Column(db.String(20), unique=False, nullable=False)
    confirm = db.Column(db.String(20), unique=False, nullable=False)
    email = db.Column(db.String(25), unique=True, nullable=False)
    vehicle_id = db.Column(db.String(100), unique=True, nullable=True)
    credits = db.Column(db.Integer, unique=False, nullable=False)
    
    def toObject(self):
        return {
            "id": self.id,
            "username": self.username,
            "password": self.password,
            "confirm": self.confirm,
            "email": self.email,
            "vehicle_id": self.vehicle_id,
            "credits": self.credits
        }

    def __repr__(self):
        return '<USERS: username=%r>' % (self.username)


class Vehicle(db.Model):
    vehicle_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(12), unique=True, nullable=False)
    plate = db.Column(db.String(8), unique=False, nullable=False)
    state = db.Column(db.String(25), unique=False, nullable=False)
    make = db.Column(db.String(25), unique=False, nullable=False)
    model = db.Column(db.String(25), unique=False, nullable=False)
    color = db.Column(db.String(25), unique=False, nullable=False)

    def toObject(self):
        return {
            "vehicle_id": self.vehicle_id,
            "username": self.username,
            "plate": self.plate,
            "state": self.state,
            "make": self.make,
            "model": self.model,
            "color": self.color
        }

    def __repr__(self):
        return '<VEHICLES: username=%r, vehicle_id=%r, plate=%r , state=%r , make=%r , model=%r>, color=%r' % (self.username,self.vehicle_id,self.plate, self.state,self.make,self.model,self.color)



class Request(db.Model):
    request_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100))
    lot = db.Column(db.String(30), unique=False, nullable=False)

    def toObject(self):
        return {
            "request_id": self.request_id,
            "username": self.username,
            "lot": self.lot,
        }

    def __repr__(self):
        return '<USERS: request_id=%r, username=%r, lot=%r>' % (self.request_id, self.username,self.lot)

class Offer(db.Model):
    offer_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100))
    lot = db.Column(db.String(30), unique=False, nullable=False)
    description = db.Column(db.String(280), unique=False, nullable=False)
    def toObject(self):
        return {
            "offer_id": self.offer_id,
            "username": self.username,
            "lot": self.lot,
            "description": self.description
        }

    def __repr__(self):
        return '<USERS: offer_id=%r, username=%r, lot=%r, description=%r>' % (self.offer_id,self.username, self.lot, self.description)
