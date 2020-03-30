from flask import Flask, jsonify
from main import perform_observation
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/v1/planets/all', methods=['GET'])
def planets_all():
    planets = perform_observation('venus')
    observation = jsonify(planets)
    print(observation)
    return observation

app.run()
