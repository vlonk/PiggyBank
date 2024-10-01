from flask import Flask, Blueprint, request, jsonify
from pymongo import MongoClient

user_bp = Blueprint("user", __name__)
client = MongoClient('mongodb+srv://piggy:piggy@codeblooded.1n8xcmo.mongodb.net/')
db = client['budget']
collection = db['user_data']
# No need to initialize PyMongo here

@user_bp.route('/register', methods=['POST'])
def register():
    print("register user endpoint")
    # Extract JSON data from the request
    data = request.json
    print(f"""
            
          
request: 
    {data}

request username: "{data['username']}
request password: "{data['password']}


          """)
    
    
    # Extract the username from the JSON data
    username = data['username']
    
    # Check if the username already exists in the database
    if collection.find_one({'username': username}):
        # If the username exists, return a JSON response with an error message and status code 400 (Bad Request)
        return jsonify({'error': 'Username already exists'}), 400
    
    # For this specific example, let's assume we also want to store the user's password
    password = data['password']
    
    # Insert the new user into the database
    collection.insert_one({'username': username, 'password': password})
    
    # Return a JSON response with a success message and status code 201 (Created)
    return jsonify({'message': 'User registered successfully', 'username': username, 'password': password}), 201
