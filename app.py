import os
import json
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app,resources={r"/*": {"origins": "*"}})
def get_directory_structure(root_dir):
    def dir_to_dict(path):
        # Create a dictionary for each directory
        dir_dict = {'name': os.path.basename(path), 'type': 'directory', 'children': []}
        try:
            for item in os.listdir(path):
                item_path = os.path.join(path, item)
                if os.path.isdir(item_path):
                    # Recursively add subdirectories
                    dir_dict['children'].append(dir_to_dict(item_path))
                else:
                    # Add files to the dictionary
                    dir_dict['children'].append({'name': item, 'type': 'file'})
        except PermissionError:
            # Handle directories/files we can't access
            dir_dict['children'].append({'name': 'Permission Denied', 'type': 'error'})
        return dir_dict

    # Generate directory structure starting from root_dir
    return json.dumps(dir_to_dict(root_dir), indent=4)

@app.route('/directory-structure', methods=['GET'])
def directory_structure():
    print('Request Initiated')
    # Get the directory path from the query parameters
    directory = request.args.get('path')
    # print(get_directory_structure('/home/user/Desktop/temp'))
    
    return get_directory_structure('/home/user/Desktop/temp')
    
@app.route('/ping')
def ping():
    return "actively running"

if __name__ == '__main__':
    app.run(debug=True,port=8080)
    
