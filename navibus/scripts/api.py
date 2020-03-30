from flask import Flask, jsonify
from main import perform_observation

app = Flask(__name__)

@app.route('/api/v1/planets/all', methods=['GET'])
def planets_all():
    planets = perform_observation('venus')
    observation = jsonify(planets)
    print(observation)
    return observation

app.run()
