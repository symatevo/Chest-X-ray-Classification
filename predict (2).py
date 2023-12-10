from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import model_utils

from flask import current_app

# from load_model import load_model

from flask import send_from_directory

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST", "GET"])
def predict():
    # global loaded_model
    data = request.get_json()
    print(f"Received data: {data}")
    print(f"Received image url: {data['imageUrl']}")

    # im_path = '00005410_000.png' # mass
    # im = model_utils.load_image_normalize(im_path)

    loaded_model = tf.keras.models.load_model('model.h5', compile=False)
    # predictions = loaded_model.predict(im)
    # print("PREDICTIONS")
    # print(predictions)

    response = model_utils.predictFromModel(data['imageUrl'], loaded_model)
    print(f"Response: {response}")
    return response


@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('static', filename)


if __name__ == "__main__":
    # loaded_model = tf.keras.models.load_model('model.h5', compile=False)
    with app.app_context():
        current_app.model = tf.keras.models.load_model('model.h5', compile=False)
    app.run()
