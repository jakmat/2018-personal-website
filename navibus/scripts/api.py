from flask import Flask
from main import perform_observation

app = Flask(__name__)

@app.route('/api/v1/planets/all', methods=['GET'])
def planets_all():
    observation = perform_observation('venus')
    return jsonify(observation)

app.run()
