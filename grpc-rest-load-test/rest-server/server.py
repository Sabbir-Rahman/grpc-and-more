from flask import Flask, jsonify
import json
import os

app = Flask(__name__)

@app.route('/large-array', methods=['GET'])
def get_large_array():
    try:
        file_path = os.path.join(os.path.dirname(__file__), '../large_array.json')
        with open(file_path, 'r') as file:
            data = json.load(file)
            return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
