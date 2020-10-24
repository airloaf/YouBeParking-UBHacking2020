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

    
    def toObject(self):
        return {
            "id": self.id,
            "username": self.username,
            "password": self.password,
            "confirm": self.confirm,
            "email": self.email,
            "vehicle_id": self.vehicle_id
        }

    def __repr__(self):
        return '<USERS: username=%r>' % (self.username)


class Vehicle(db.Model):
    vehicle_id= db.Column(db.String(100), primary_key=True)
    license_plate = db.Column(db.String(8), unique=False, nullable=False)
    state = db.Column(db.String(25), unique=False, nullable=False)
    make = db.Column(db.String(25), unique=False, nullable=False)
    model = db.Column(db.String(25), unique=False, nullable=False)

    def toObject(self):
        return {
            "vehicle_id": self.vehicle_id,
            "license_plate": self.license_plate,
            "state": self.state,
            "make": self.make,
            "model": self.model
        }

    def __repr__(self):
        return '<VEHICLES: vehicle_id=%r, license_plate=%r , state=%r , make=%r , model=%r>' % (self.vehicle_id,self.license_plate, self.state,self.make,self.model)



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
