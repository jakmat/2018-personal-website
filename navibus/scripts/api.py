from flask import Flask, jsonify
from main import perform_observation
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/v1/planets/all', methods=['POST'])
def planets_all():
    from = request.args['from']
    to = request.args['to']
    print(from)
    print(to)
    planets = perform_observation('venus')
    observation = jsonify(planets)
    print(observation)
    return observation

app.run()
