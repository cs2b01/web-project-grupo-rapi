from flask import Flask,render_template, request, session, Response, redirect
from database import connector
from model import entities
import json

db = connector.Manager()
engine = db.createEngine()

app = Flask(__name__)

app.debug=True

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/static/<content>')
def static_content(content):
    return render_template(content)

@app.route('/current', methods = ['GET'])
def current_user():
    db_session = db.getSession(engine)
    user = db_session.query(entities.User).filter(entities.User.id == session['logged_user']).first()
    return Response(json.dumps(user,cls=connector.AlchemyEncoder),mimetype='application/json')

@app.route('/authenticate', methods = ['POST'])
def authenticate():
    message = json.loads(request.data)
    username = message['username']
    password = message['password']


    db_session = db.getSession(engine)

    try:
        user = db_session.query(entities.User
            ).filter(entities.User.username == username
            ).filter(entities.User.password == password
            ).one()
        session['logged_user'] = user.id
        message = {'message' : 'Authorized'}
        return Response(message, status=200, mimetype='application/json')
    except Exception:
        message = {'message' : 'Unauthorized'}
        return Response(message, status=401, mimetype='application/json')


@app.route('/users', methods = ['GET'])
def get_users():
    session = db.getSession(engine)
    dbResponse = session.query(entities.User)
    data = []
    for user in dbResponse:
        data.append(user)
    return Response(json.dumps(data, cls=connector.AlchemyEncoder), mimetype='application/json')

@app.route('/create_test_users', methods = ['GET'])
def create_test_users():
    db_session = db.getSession(engine)
    user = entities.User(name="David", fullname="Lazo", password="password", username="username")
    db_session.add(user)
    db_session.commit()
    return "Test user created!"

@app.route('/users', methods = ['PUT'])
def update_user():
    session = db.getSession(engine)
    id = request.form['key']
    user = session.query(entities.User).filter(entities.User.id == id).first()
    c =  json.loads(request.form['values'])
    for key in c.keys():
        setattr(user, key, c[key])
    session.add(user)
    session.commit()
    return 'Updated User'

@app.route('/users', methods = ['DELETE'])
def delete_user():
    id = request.form['key']
    session = db.getSession(engine)
    users = session.query(entities.User).filter(entities.User.id == id)
    for user in users:
        session.delete(user)
    session.commit()
    return "Deleted Message"

@app.route('/users', methods = ['POST'])
def create_user():
    c =json.loads(request.data)
    user = entities.User(
        username=c['username'],
        name=c['name'],
        tipo=c['type'],
        password=c['password']
    )
    session = db.getSession(engine)
    session.add(user)
    session.commit()
    return 'Created User'

if __name__ == '__main__':
    app.secret_key = ".."
    app.run(port=8080, threaded=True, host=('127.0.0.1'))
