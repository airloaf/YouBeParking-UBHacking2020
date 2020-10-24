from flask_restx import Namespace, Resource, reqparse, cors
from db import User, Vehicle, Request, Offer, db
from sqlalchemy import func


# namespace for user registration/login
api = Namespace('users', description='Information for user creation/authentication', decorators=[cors.crossdomain(origin="*")])

# api for user registration
register = api.parser()
register.add_argument('username', type=str, required=True, help="new user username")
register.add_argument('password', type=str, required=True, help="new user password")
register.add_argument('confirm', type=str, required=True, help="confirmed password")
register.add_argument('email', type=str, required=True, help="new user email")

# api for user login
login = api.parser()
login.add_argument('username', type=str, required=True, help="login username")
login.add_argument('password', type=str, required=True, help="login password")

# api for requesting a parking spot
request = api.parser()
request.add_argument('username', type=str, required=True, help="username of person requesting spot")
request.add_argument('lot', type=str, required=True, help="parking lot requested")

# api for offering a parking spot
offer = api.parser()
offer.add_argument('username', type=str, required=True, help="username of person offering spot")
offer.add_argument('lot', type=str, required=True, help="parking lot requested")
offer.add_argument('description', type=str, required=True, help="parking lot description")

# api for adding a vehicle
vehicle = api.parser()
vehicle.add_argument('username', type=str, required=True, help="username")
vehicle.add_argument('make', type=str, required=True, help="vehicle make")
vehicle.add_argument('model', type=str, required=True, help="vehicle model")
vehicle.add_argument('plate', type=str, required=True, help="vehicle plate")
vehicle.add_argument('state', type=str, required=True, help="state on plate")
vehicle.add_argument('color', type=str, required=True, help="vehicle color")






@api.route('/register')
@api.expect(register)
class Register(Resource):
    def post(self):
        args = register.parse_args()
        username = args['username']
        password = args['password']
        confirm = args['confirm']
        email = args['email']
        try:
            usr = User(username=username, password=password, confirm=confirm, email=email)
            db.session.add(usr)
            db.session.commit()

            return {
                "result": "Success"
            }
        except:
            return {
                "result" : "Error"
            }, 400



@api.route('/request')
@api.expect(request)
class MakeRequest(Resource):
    def get(self):
        args = request.parse_args()
        offer_id = args['offer_id']
        offer = Offer.query.filter_by(offer_id=offer_id).first()
        if offer.offer_id == offer_id:
             return {
            "result": "Success"
        }
        else:
            return {
            "result" : "Error"
        }, 400



@api.route('/login')
@api.expect(login)
class Login(Resource):
    def get(self):
        args = login.parse_args()
        username = args['username']
        password = args['password']
        user = User.query.filter_by(username=username).first()
        if user.password == password:
             return {
            "result": "Success"
        }
        else:
            return {
            "result" : "Error"
        }, 400



@api.route('/offer')
@api.expect(offer)
class MakeOffer(Resource):
    def post(self):
        args = login.parse_args()
        username = args['username']
        lot = args['lot']
        description = args['description']
        try:
            off = Offer(username=username, lot=lot, description=description)
            db.session.add(off)
            db.session.commit()
            return {
                "result": "Success"
            }
        except:
            return {
                "result" : "Error"
            }, 400

        

@api.route('/vehicle')
@api.expect(vehicle)
class addVehicle(Resource):
    def post(self):
        args = vehicle.parse_args()
        username = args['username']
        make = args['make']
        model = args['model']
        plate = args['plate']
        state = args['state']
        color = args['color']
        # try:
        veh = Vehicle(username=username, make=make, model=model, plate=plate, state=state, color=color)
        db.session.add(veh)
        db.session.commit()
        return {
            "result": "Success"
        }
        # except:
        #     return {
        #         "result" : "Error"
        #     }, 400
        
        
       

       
